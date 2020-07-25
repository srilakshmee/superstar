from flask import Blueprint, request, make_response, jsonify, Response
import json
from flask.views import MethodView
import pandas as pd
import numpy as np
import csv

trend_blueprint = Blueprint('trend', __name__)
genre_blueprint = Blueprint('genre', __name__)

class TrendAPI(MethodView):
    """
    APi to get Trending data by Year
    """
    def get(self,year):
        data = pd.read_csv('data/data_by_artist.csv')
        df = pd.DataFrame(data,columns=['artists','duration_ms','name','popularity','year'])
        #Filter by year
        is_year = df['year']==int(year)
        dt = df[is_year].sort_values(by=['popularity'],ascending=False)
        dt = dt.head(n=10)
        special_char = ['[',']','\'']
        for char in special_char:
            dt['artists'] = dt['artists'].str.replace(char, '')
        avg_duration = str(dt["duration_ms"].mean(axis=0)/1000)+' sec'
        responseObject = {
            'artists': json.loads(dt.to_json(orient='records')),
            "avg_duration": avg_duration
        }
        return make_response(responseObject), 201

import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_selection import f_regression
class GenreAPI(MethodView):
    """
    APi to get Genre classification
    """
    def get(self):
        sns.set()
        data = pd.read_csv('data/spotify_data_by_genres.csv')
        #print(data.head())
        print('-------------------------')
        lb_make = LabelEncoder()
        data["genres_code"] = lb_make.fit_transform(data["genres"])
        print(data.describe(include='all'))
        #print(data[['genres','genres_code']].head(11))
        x = data[['acousticness','danceability','duration_ms','energy','instrumentalness','liveness','loudness','speechiness','tempo','valence','popularity','key','mode']]
        y = data[['genres_code']]
        #apply_linearregression(x,y)
        x_scaled = apply_scaling(x,y)
        apply_linearregression(x_scaled,y)
        predict(x,y,x_scaled)
        responseObject = {
            'message': 'Test',
        }
        return make_response(responseObject), 201

# add Rules for API Endpointvs
trend_blueprint.add_url_rule(
    '/trend/year/<year>',
    view_func=TrendAPI.as_view('trend_api'),
    methods=['GET']
)
genre_blueprint.add_url_rule(
    '/genre',
    view_func=GenreAPI.as_view('genre_api'),
    methods=['GET']
)

def predict(x,y,x_scaled):
    new_data = pd.DataFrame(data=[[0.00000159,0.547,268400,0.702,0.758,0.11,-17.068,0.0403,140.574,0.255,30,0,1],\
    [0.00000328,0.492,285667,0.947,0.756,0.319,-5.97,0.0433,120.036,0.212,45,1,1]],\
    columns=['acousticness','danceability','duration_ms','energy','instrumentalness','liveness','loudness','speechiness','tempo','valence','popularity','key','mode'])
    #new_data_scaled = apply_scaling(x,y,new_data)
    scalar = StandardScaler()
    scalar.fit(x)
    new_data_scaled = scalar.transform(new_data)#subtract mean and divide by std deviation
    print(new_data_scaled)

    reg = LinearRegression()
    reg.fit(x_scaled,y)
    p = reg.predict(new_data_scaled)
    print(p)

from sklearn.preprocessing import StandardScaler
def apply_scaling(x,y):
    scalar = StandardScaler()
    scalar.fit(x)
    x_scaled = scalar.transform(x)#subtract mean and divide by std deviation
    print(x_scaled)
    return x_scaled

def apply_linearregression(x,y):
    #This model does not work
    reg = LinearRegression()
    reg.fit(x,y)
    print('Coeff')
    print(reg.coef_)
    print('intercept')
    print(reg.intercept_)
    reg_sum = pd.DataFrame([['Bias'],['acousticness'],['danceability'],['duration_ms'],['energy'],['instrumentalness'],['liveness'],['loudness'],['speechiness'],['tempo'],['valence'],['popularity'],['key'],['mode']],columns=['Features'])
    reg_sum['Weights'] = reg.intercept_ ,reg.coef_[0][0],reg.coef_[0][1],reg.coef_[0][2],reg.coef_[0][3],reg.coef_[0][4],reg.coef_[0][5],reg.coef_[0][6],reg.coef_[0][7],reg.coef_[0][8],reg.coef_[0][9],reg.coef_[0][10],reg.coef_[0][11],reg.coef_[0][12]
    print(reg_sum)
    r2 = reg.score(x,y)
    #Find the adjusteed R square values
    n = x.shape[0]
    p = x.shape[1]
    adj_r2 = 1-(1-r2) * (n-1)/(n-p-1)
    #print(adj_r2)

    # Feature Selection

    #p_values = f_regression(x,y)[1]
    #print(p_values.round(3))
