# Testing the project

### Requirements:
* Protractor

Protractor is end-to-end testing framework. It tests things just like end-user. 

Complete guide and details for Protractor can be found here: http://www.protractortest.org/

## How to run the test

### Installation

Before starting on tests, you must install things mentioned in requirement as below:

Protractor:
```
npm install -g protractor
or 
npm install protractor --save
```

Update driver (as it works with chrome, firefox browser drivers)
```
webdriver-manager update
``` 

### Run the tests
This project aslready has certain tests written under path /tests/

To run the tests you need to go to the directory
```
cd tests
```

Run the tests
```
protractor conf.js
```

Output:
```
[17:11:31] I/launcher - Running 1 instances of WebDriver
[17:11:31] I/direct - Using ChromeDriver directly...
Started
......


6 specs, 0 failures
Finished in 6.751 seconds

```


