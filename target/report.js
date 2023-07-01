$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/ForgottenPassword.feature");
formatter.feature({
  "name": "To validate the forgotten password page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the forgotten password page by giving  invalid phone number or email",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the forgotten password text",
  "keyword": "When "
});
formatter.match({
  "location": "ForgottenPassword.userHasToClickTheForgottenPasswordText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to navigate to forgotten password page",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPassword.userHasToNavigateToForgottenPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to enter the phone number or Email in the textbox",
  "rows": [
    {
      "cells": [
        "Data1",
        "Data2",
        "Data3"
      ]
    },
    {
      "cells": [
        "8765432109",
        "adghhawer@gmail.com",
        "Surya123@gmail.com"
      ]
    },
    {
      "cells": [
        "Keshave@gmail.com",
        "9080566459",
        "8228877124"
      ]
    },
    {
      "cells": [
        "charlie@yahoo.com",
        "raghul@buingo.com",
        "7564321890"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPassword.userHasToEnterThePhoneNumberOrEmailInTheTextbox(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "ForgottenPassword.userHasToClickTheSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/Login.feature");
formatter.feature({
  "name": "To validate the Login functionality of Facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user has to launch the required Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheRequiredUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value in userbox and passwordbox",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUserboxAndPasswordbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.userHasNavigateToHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.step({
  "name": "user has to enter the value \"\u003cuserdata\u003e\" in username and\"\u003cpassworddata\u003e\" in password",
  "keyword": "And "
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userdata",
        "passworddata"
      ]
    },
    {
      "cells": [
        "java",
        "java@123"
      ]
    },
    {
      "cells": [
        "selenium",
        "Selenium12"
      ]
    },
    {
      "cells": [
        "python",
        "python@123"
      ]
    },
    {
      "cells": [
        "Cucumber",
        "cucumber123"
      ]
    },
    {
      "cells": [
        "zxdergf",
        "1232334"
      ]
    },
    {
      "cells": [
        "surya",
        "surya1234"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value \"java\" in username and\"java@123\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUsernameAndInPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value \"selenium\" in username and\"Selenium12\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUsernameAndInPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value \"python\" in username and\"python@123\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUsernameAndInPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value \"Cucumber\" in username and\"cucumber123\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUsernameAndInPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value \"zxdergf\" in username and\"1232334\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUsernameAndInPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to open the Chrome browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.userHasToOpenTheChromeBrowserAndMaximizeTheWindow()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the Loging functionality with all credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user has to launch the Url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.userHasToLaunchTheUrl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the value \"surya\" in username and\"surya1234\" in password",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToEnterTheValueInUsernameAndInPassword(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.userHasToClickTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has navigate to error page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_navigate_to_error_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/Practice.feature");
formatter.feature({
  "name": "To validate the new account creation functinality of facebook",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate the Account page by all valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has to launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToLaunchTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to launch the Url and click create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToLaunchTheUrlAndClickCreateNewAccountButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to navigate to create new account page",
  "keyword": "And "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToNavigateToCreateNewAccountPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the Firstname and secondname",
  "rows": [
    {
      "cells": [
        "sriram",
        "adhavan",
        "hari",
        "arun",
        "kiran"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToEnterTheFirstnameAndSecondname(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027firstname\u0027]\"}\n  (Session info: chrome\u003d114.0.5735.199)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O95Q88P5\u0027, ip: \u0027192.168.163.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.199, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: C:\\Users\\SURYA~1\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:58732}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b83eb245ab36610aaed1b8d18b431449\n*** Element info: {Using\u003dname, value\u003dfirstname}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.step.FbCreatingNewAccount.userHasToEnterTheFirstnameAndSecondname(FbCreatingNewAccount.java:46)\r\n\tat ✽.user has to enter the Firstname and secondname(src/test/resources/Feature/Practice.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to enter the moblie number or email id",
  "rows": [
    {
      "cells": [
        "8765432109",
        "adghhawer@gmail.com",
        "Surya123@gmail.com"
      ]
    },
    {
      "cells": [
        "Keshave@gmail.com",
        "9080566459",
        "8228877124"
      ]
    },
    {
      "cells": [
        "charlie@yahoo.com",
        "raghul@buingo.com",
        "7564321890"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToEnterTheMoblieNumberOrEmailId(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click the gender icon",
  "keyword": "And "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToClickTheGenderIcon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click signup button",
  "keyword": "And "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToClickSignupButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to navigate to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "FbCreatingNewAccount.userHasToNavigateToHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});