# Superstar
Simple web application that provides a snapshot of the hottest artists, songs and musical trends.
## Client
The UI compoenents are developed using Material UI as it provides ready to use React components which can be customised
### Top artists of 2020
The data in data_by_artist.csv is filtered for year 2020 , sorted by popularity in descending order and the top 10 records are displayed on the UI.
The average duration of these top 10 songs are calculated using pandas mean function , converted to seconds by divding by 1000 and provided to the UI
## Server
Python Flask is used on the server side for providing the API support for the front end.
Pandas dataframe is used to analyse and filter and provide the relevant data from the csv file
## Quick Start

### Basics

1. Activate a virtualenv(virtualenv -v env in ubuntu , venv env in windows)
1. Install the requirements (pip install -r requirements.txt)

### Set Environment Variables

Update *project/server/config.py*, and then run:

```sh
$ export APP_SETTINGS="project.server.config.DevelopmentConfig"
```

or

```sh
$ export APP_SETTINGS="project.server.config.ProductionConfig"
```

### Run the Application

```sh
$ python manage.py runserver
```

So access the application at the address [http://localhost:5000/](http://localhost:5000/)

### Testing

Without coverage:

```sh
$ python manage.py test
```

With coverage:

```sh
$ python manage.py cov
```
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## To run from the docker image on a ubuntu system
docker run -p 5000:5000 -d srilakh/superstar-demo:v1

where srilakh/superstar-demo:v1 is the image of the application available in docker hub

## To deploy in AWS and make the app available on the public IP,use following command
python manage.py runserver --host=0.0.0.0
