# reddit-sample
![Image of architecture](http://bshukla.com/images/reddit-sample-arch1.png)

This project is live on Heroku, here: https://reddit-sample.herokuapp.com/ 

## Features
* Login or Getting In with a username
* Home page with set of actions
* List of top 20 topics
* Upvote/ Downvote on any topic
* Submit new topic
* Logout

## How to run on local
clone the code.
Execute following commands in sequence to host & run the project on machine 
```
cd reddit-sample
npm install
npm start
```
That's it! Project is running.
Go to URL: http://localhost:3000
![Image of login page](http://bshukla.com/images/reddit-sample-UI-1.png)
![Image of home page top](http://bshukla.com/images/reddit-sample-UI2.png)
![Image of home page bottom](http://bshukla.com/images/reddit-sample-UI3.png)

## How to deploy on heroku
Complete guidelines provided here: https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction
1. Create a Heroku account & download heroku CLI for your system
2. Open terminal and login with heroku credentials
```
heroku login
```
You must have node version > 4.x, npm and git installed & ready on machine


Git clone the application (if you already  not), & go to the root directory of project.
Now, execute following commands to deploy the application
```
heroku create
```
^ It will create an app on heroku

Now, deploy the app
```
git push heroku master
```

Okay, your application is deployed.

## Assumptions
* As we all know about Reddit, this is not the complete replica, but very small part just to begin with. It's just the small UI development with little backend support.
* User can upvote/downvote as many times as he/she wants however it's not the same case with Reddit in actual. This is for demo purpose only.
* There is a restriction has been implemented in this project assuming the user should not be able to vote own topics.
* Just to give an overview scenario, it is showing only 20 topics descending order based on votes count
* There is a restriction implemented assuming that votes count should not go below 0. It will stick to 0 in case of downvotes.
* There isn't any limit given on upvotes.

## Inclusions / implementations
* Topic has max length of 255
* 20 top voted topics will be visible on homepage (max 20)
* Not used any in-memory storage systems/services, topics and details will be stored in standard dictionary provided by javascript (in backend)
* Tests are written for all the primary features


## Components
### Frontend
This portion is responsible to serve front end developed using AngularJS
Documentation of frontend can be found in /frontend dir as README.
https://github.com/bhaumikshukla/reddit-sample/tree/master/frontend#frontend
### Backend
Backend is responsible to serve through REST APIs, developed using NodeJS. Complete documentation of details & APIs can be found in /node-backend directory as README.
https://github.com/bhaumikshukla/reddit-sample/tree/master/node-backend#backend
### Test
Tests are written for all the primary features as mentioned below:
* Login Page test
* Login feature test
* Home page
* Default topics loaded test
* New topic submission test
* Upvote/Downvote submission test
* Logout test

Documentation of tests can be found under/tests directory as README.
https://github.com/bhaumikshukla/reddit-sample/tree/master/tests#testing-the-project


