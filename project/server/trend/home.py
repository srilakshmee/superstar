from flask import Blueprint, request, Response, jsonify,render_template
from flask.views import MethodView
from flask.helpers import make_response

home_blueprint = Blueprint('', __name__)

class HomeAPI(MethodView):
    """
    APi to get default page
    """
    def get(self):
        response = make_response(render_template('index.html'))
        return response , 201

# add Rules for API Endpointvs
home_blueprint.add_url_rule(
    '/',
    view_func=HomeAPI.as_view('home_api'),
    methods=['GET']
)
