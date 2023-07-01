Feature: To validate the Login functionality of Facebook

Background:
Given user has to open the Chrome browser and maximize the window
@sanity
Scenario: To validate the login page
When user has to launch the required Url
And  user has to enter the value in userbox and passwordbox 
And user has to click the login 
Then user has navigate to homepage

Scenario Outline: To validate the Loging functionality with all credentials
When user has to launch the Url
And  user has to enter the value "<userdata>" in username and"<passworddata>" in password 
And user has to click the login button
Then user has navigate to error page

Examples:
|userdata  |passworddata |
|java      |java@123     |
|selenium  |Selenium12   |
|python    |python@123   |
|Cucumber  |cucumber123  |
|zxdergf   |1232334      |
|surya     |surya1234    |



