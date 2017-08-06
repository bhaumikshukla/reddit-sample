# Frontend

## Features
* Login or Getting In with a username
* Home page with set of actions
* List of top 20 topics
* Upvote/ Downvote on any topic
* Submit new topic
* Logout

#### Requirements:
(note: just to run this project under nodejs)
* NodeJS > 4.x
* npm
* git
* AngularJS

#### Requirements for testing:
* Protractor

### Choosing stack:
AngularJS: 

As it was a simple application to buld, there is no requirement of going further with advanced UI development tools, however the simple HTML, CSS cal also do the job but a basic Angular can reduce the development time and increase efficiency for this scenario.

NodeJS:

There is only once specific reason to choose NodeJS i.e. the complete stack is in Javascript so no additional skills required to understand the code. Moreover, anyone can also develop the same REST APIs in any other languages like Python, goLang, etc. 

Protractor:

As there are couple of testing framework available, but this one does the end-to-end testing thoroughly. As it makes more sense to chose this kind of framework when there is a scenario of backend and frontend development running together. It runs tests for both. Additionally it lives with Angular JS too.

Bootstrap:

As there was a need to make UI decent, bootstrap is the first choice which can actually saves the time and gives better results. It's not the supreme framework which matches with the scenario but taken as something has to be taken for UI.


## Views & controllers

### for login
It contains simple html view and a controller to support processing of provided data.

path: /login

### for home page
It contains a home page view in html, has enbedded features like
* List of top 20 topics
* Upvote and Downvote and showing total number of votes
* A box at bottom side, to submit new topic
* Welcome message
* Logout

Has a controller to manage these actions can be taken on homepage. Uses a service to get data through REST calls.

path: /home/


## Assumptions
* As we all know about Reddit, this is not the complete replica, but very small part just to begin with. It's just the small UI development with little backend support.
* User can upvote/downvote as many times as he/she wants however it's not the same case with Reddit in actual. This is for demo purpose only.
* There is a restriction has been implemented in this project assuming the user should not be able to vote own topics.
* Just to give an overview scenario, it is showing only 20 topics descending order based on votes count
* There is a restriction implemented assuming that votes count should not go below 0. It will stick to 0 in case of downvotes.
* There isn't any limit given on upvotes.


