# superstar
Simple web application that provides a snapshot of the hottest artists, songs and musical trends.
## Client
The UI compoenents are developed using Material UI as it provides ready to use React components that can be customised
### Top artists of 2020 
The data in data_by_artist.csv is filtered for year 2020 , sorted by popularity in descending order and the top 10 records and displayed on the UI
The average duration of these top 10 songs are calculated using pandas mean function , converted to seconds by divding by 1000 and provided in the UI
## Server
Python Flask is used on the server side for providing the API support for the front end
Pandas dataframe is used to analyse and filter and provide the relevant data from the csv file
## Quick Start

### Basics

1. Activate a virtualenv
1. Install the requirements

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
