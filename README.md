<p align="center">
    <img src="logo.png" width="600" height="140"></img>
    <p align="center">
        Recruitment task for <a href="https://www.netguru.com/">NetGuru</a>
    </p>
</p>
</br></br>

# Recruitment Task

---

## The task

Task is to build simple REST API - a basic movie database interacting with external API. Here’s full specification of endpoints for the API:

POST `/movies`:
Based on passed data, other movie details should be fetched from http://www.omdbapi.com/ (or other similar, public movie database) - and saved to application database.
GET `/movies`:
Should fetch list of all movies already present in application database.
POST `/comments`:
Comment should be saved to application database
GET `/comments`:
Should fetch list of all comments present in application database.

NetGuru Rules & hints:

- Please consider those requirements as basic. We value a good code structure or additional functionalities.
- During implementing the assignment use many different and appropriate layers (i.e. middleware), design patterns (i.e. serializers), and so on.
- Don’t forget to test appropriate amount of code.
- Usage of latest ECMAScript/TypeScript standard and features is encouraged.
- The application's code should be kept in a public repository so that we can read it, pull it and build it ourselves. Remember to include README file or at least basic notes on application requirements and setup - we should be able to easily and quickly get it running.
- Please dockerize your application.
- Written application must be hosted and publicly available for us online - we recommend Heroku.

## The solution

I have prepared simple API using Express.js alongside with MongoDB. External api request are made with Axios.
In this task I have used more functional apporoach, which means the only classes found in my solution are Typegoose schema declarations.

## Endpoints

### Movies

POST `api/v1/movies` -> Adds movie to database, additional info is fetched from OMDb. Required body:

```
{
"Title": "<Title of movie>"
"Year": "<Year movie was relased in>"
}

```

GET `api/v1/movies`

### Comments

POST `api/v1/comments` -> Adds new comment. Required body:

```
{
    "movieId": "<Id of a movie to comment>",
    "userId": "<Fictional user ID, may be 1 or UUID>",
    "message": "<Messgae>"

}
```

GET `api/v1/comments?=:movieId` -> Returns all comments in database, if query parameter is passed it returns all comments with such movie Id.

GET `api/v1/comments/:commentId` -> Returns single desired comment by ID.

PUT `api/v1/comments/:commentId` -> Updated single desired comment. Required body:

```
{
    "message": "<Message>"
}
```

DELETE `api/v1/comments/:commentId` -> Deleted single desired comment from database.

## How do install and run

To install, clone rpository and run:

```
    yarn
    yarn build
    yarn start:prod
```

or using docker

`docker-compose up -d`

### Tests

To run unit tests simply use:

`yarn test`

## Hosting

Application is hosted on heroku udner this URL ->
