FROM python:3.7.6-buster
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5001
ENTRYPOINT [ "python" ]
CMD [ "manage.py", "runserver","--host=0.0.0.0" ]
