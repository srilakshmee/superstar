# project/server/__init__.py

import os

from flask import Flask
from flask_cors import CORS

app = Flask(__name__ ,static_folder='../client/build/static',
               template_folder='../client/build')
app_settings = os.getenv(
    'APP_SETTINGS',
    'project.server.config.DevelopmentConfig'
)
app.config.from_object(app_settings)
CORS(app)

from project.server.trend.views import trend_blueprint,genre_blueprint
from project.server.trend.home import home_blueprint
app.register_blueprint(home_blueprint)
app.register_blueprint(trend_blueprint)
app.register_blueprint(genre_blueprint)
