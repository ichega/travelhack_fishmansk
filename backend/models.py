from peewee import *

db = SqliteDatabase('gavno.db')

class Person(Model):
    name = CharField()
    password = CharField()
    email = CharField()
    class Meta:
        database = db

class Session(Model):
    person = IntegerField()
    access_key = CharField()
    class Meta:
        database = db