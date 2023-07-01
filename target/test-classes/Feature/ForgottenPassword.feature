Feature: To validate the forgotten password page
Scenario: To validate the forgotten password page by giving  invalid phone number or email
When user has to click the forgotten password text
And user has to navigate to forgotten password page
And User has to enter the phone number or Email in the textbox
|Data1             |Data2                |Data3               |
| 8765432109       | adghhawer@gmail.com | Surya123@gmail.com |
|Keshave@gmail.com | 9080566459          | 8228877124         |
|charlie@yahoo.com | raghul@buingo.com   | 7564321890         |
And user has to click the search button