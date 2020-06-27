from flask import Blueprint, request, make_response, jsonify, Response
import json
from flask.views import MethodView
trend_blueprint = Blueprint('trend', __name__)

class TrendAPI(MethodView):
    """
    APi to get Trending data by Year
    """
    def get(self,year):
        import pandas as pd
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

# add Rules for API Endpointvs
trend_blueprint.add_url_rule(
    '/trend/year/<year>',
    view_func=TrendAPI.as_view('trend_api'),
    methods=['GET']
)
