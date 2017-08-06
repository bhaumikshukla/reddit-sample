# Backend

#### Requirements:
* NodeJS > 4.x
* ExpressJS
* npm
* git

#### Requirements for testing:
* Protractor


## API Documentation

Backend has been designed to serve the data through REST over HTTP.

* API to Retrieve top 20 records/topics data (order: desc by upvotes)
  ```
  Method: GET
  Endpoint: /api/

  Response (JSON):
  [
      {
          "topic" : "One of the topic <<String>>",
          "votes" : 4 << Number:: number of votes a topic has>> ,
          "user"  : "user1" << String::A topic submitted by a user >>
      }
  ]

  ```

* API to submit new topic
  ```
  Method: POST
  Endpoint: /api/topic
  Payload (JSON):
  {
  	"topic" : "<<String:: Topic>>",
    "user" : "<<String::current User>>"
  }

  Response (JSON):
  {"status":"success","message":"topic has been stored"}
  ```
  
* API to submit votes (Upvote or Downvote)
  ```
  Method: POST
  Endpoint: /api/vote
  Payload (JSON):
  {
    "topic" : "<<String:: Topic>>",
    "vote" : "UP<<String::UP or DOWN>>"
  }

  Response (JSON):
  {"status":"success","message":"vote has been registered"}
  ```
  

  
  
  
  
 
