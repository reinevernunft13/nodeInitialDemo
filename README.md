# SPRINT 4.1: Node REST Server

Build an API REST with Node and Express.

## 👩‍💻 Requirements

* [Node.js](https://nodejs.org/en/download/)

## 🤓 Instructions

> **Step 1** - Clone the project:

```
gh repo clone reinevernunft13/nodeInitialDemo
```

> **Step 2** - Install the necessary dependencies via NPM:

```
npm install
```

> **Step 3** - Start the server 

(production mode):

```
npm start
```
(dev mode):

```
npm run dev
```
The API server will be started and will run on port 3000. A message to this effect will be logged to the console.

## 💻 API Endpoints

### Testing Tools
Since the project does not have a client-side, in order to test our API's endpoints, we'll use [Postman](https://www.postman.com/). Various Postman requests have been group into a collection, to be found in a JSON file under the project's folder "/POSTMAN".

### API Responses 

**LEVEL 1** ⭐
#### GET/ http://localhost:3000/user

* Returns the following response in JSON format. 

```
{
    "name": "Britney",
    "age": "40",
    "url": "http://localhost:3000/user"
}
```

* When attempting to make a request to an non-existing route, a 404 status message will be returned. 

    **NOTE**: *You can view responses to GET-type requests by navigating to: http://localhost:3000/* 
    
#### POST/ http://localhost:3000/upload

* Uploads images with jpeg, jpg, png, and gif format. Since this is not a text file, when creating your Postman request, you'll need to select: "Body" > "form-data". Next, in "KEY" enter "my_pic" and select "file", instead of text, so that "value" reflects “select files”. The folder "/my_uploads" will be created where uploaded files will be stored.

    **NOTE**: *Under the folder "/test_files", a .jpeg and a .txt file can be found. You can use these for your convenience, but any other file in your computer should work to test this endpoint.*

* If successful, a 200 status message will be returned;

* If it fails, either a 400 or 415 status message will be returned;

* If something goes wrong with the server, a 500 code message will be returned;  

**LEVEL 2** ⭐⭐
#### POST/ http://localhost:3000/time

* Returns server's date and time in the format:

````
{
    "date": "15/09/2022, 12:08:18"
}
````

* When testing this endpoint's functionality in Postman, select "Authorization" > "Basic Auth". 

    - Username: admin
    - Password: password1234

* If the credentials are not valid or the auth header is not included, a 401 status message will be returned.

**LEVEL 3** ⭐⭐⭐ 
#### POST/ http://localhost:3000/pokemon/:id

* Calls the [Pokémon API](https://pokeapi.co/) and fetches pokemon data (name, height, and weight) by a pokemon's ID#. For example:
```
{
    "pokemon": {
        "name": "bulbasaur",
        "height": 7,
        "weight": 69
    }
}
```
* In Postman, go to "Params" > "Path Variables" and enter a given pokemon's ID# as value.








