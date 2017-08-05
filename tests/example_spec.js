/*
This is a testing file, end-to-end testing all the features from the end user perspective.
*/

// this test checks the first login page
var baseURL = "http://localhost/"
describe('angularjs loginpage', function() {
  it('open login page', function() {
    // going to the URL
    browser.get(baseURL);
    // checking the title text
    expect(browser.getTitle()).toEqual('Reddit-sample');
  });

  // testing the loggin in feature
  describe('loggin in', function() {
  it('should login with username', function() {

    // here, we just need username as of now
    element(by.model('vm.username')).sendKeys("testuser1");
    // button clicks
    element(by.id('loginbtn')).click();
    // verifying login with welcome text
    expect(element(by.binding('username')).getText()).
        toEqual('Welcome testuser1.');
  });
});

  // testing all the primary actions on homepage
  describe('homepage actions', function() {
  it('should have default objects loaded', function() {
    var records = element.all(by.repeater("obj in vm.listTopics"));
    var okay = false
    expect(records.count()).toEqual(10) //default length of total records

  });

  it('should be able to submit topic', function() {
    element(by.model('vm.newtopic')).sendKeys("New topic");

    element(by.id('newtopicsubmitbtn')).click();
    var records = element.all(by.repeater("obj in vm.listTopics"));
    expect(records.count()).toEqual(11)

  });

  it('should be able to upvote & downvote', function() {
    var records = element.all(by.repeater("obj in vm.listTopics"));
    //records.get(1).getText()
    element(by.id("I did not agree to this bed switch.-Dog_upvote")).click();
    //element(by.id(topic_name+"_upvote")).click();

    // upvote successfully placed check
    expect(element(by.id("I did not agree to this bed switch.-Dog_votes")).getText()).toEqual('3'); 

    // now downvote check
    element(by.id("I did not agree to this bed switch.-Dog_downvote")).click();
    // Downvote successfully placed check
    expect(element(by.id("I did not agree to this bed switch.-Dog_votes")).getText()).toEqual('2'); 

  });

  it('should be able to logout', function() {
    
    // clicking on logout
    element(by.id("logout")).click();
    expect(element(by.id("heading")).getText()).toEqual('Get-in');

  });

});

});




