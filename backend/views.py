from sanic.response import json
import uuid
from models import *

async def test2(request):
    print("dadaa")
    # return "access_token"
    access_token = uuid.uuid4()
    print(access_token)
    return json({"access_token": "kamol_lox"})

async def sign_in(request):
    data = request.json
    person = Person.get_or_none(Person.name == data['name'])
    if (person != None or person.password == data["password"]):
            access_key = uuid.uuid4()
            session = Session(person=person.id,
                              access_key = access_key)
            session.save()
            return json({"access_token": str(access_key),
                         "code":"0"})
    return json({"code": "1"})
async def sign_up(request):
    data = request.json
    name = data["name"]
    password = data["password"]
    email = data["email"]
    person = Person.get_or_none(Person.name == name)
    if person == None:
        person = Person.get_or_none(Person.email == email)
        if person == None:
            person = Person(email = email,
                            name = name,
                            password = password)
            person.save()
            return json({"code":"0"})

    return json({"code":"1"})



async def sign_out(request):
    data = request.json
    person = Person.get_or_none(Person.name == data['name'])
    if (person != None or person.password == data["password"]):
            access_key = uuid.uuid4()
            session = Session(person=person.id,
                              access_key = access_key)
            session.save()
            return json({"access_token": str(access_key)})