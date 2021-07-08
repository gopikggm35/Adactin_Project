$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking Functionality",
  "description": "",
  "id": "hotel-booking-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Enter the Valid \"\u003cUsername\u003e\" Username",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Enter the Valid \"\u003cPassword\u003e\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 20,
      "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;1"
    },
    {
      "cells": [
        "jack",
        "3108dk"
      ],
      "line": 21,
      "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;2"
    },
    {
      "cells": [
        "jhon",
        "32080s"
      ],
      "line": 22,
      "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;3"
    },
    {
      "cells": [
        "vinovicky",
        "Jan@2020"
      ],
      "line": 23,
      "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 221760600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter the Valid \"vinovicky\" Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enter the Valid \"Jan@2020\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 8344478400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 366520300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 209089800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1353134300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 155000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Enter the Valid \"jack\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Enter the Valid \"3108dk\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 1018339100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jack",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 141643100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3108dk",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 158254300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 708748900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 58800,
  "status": "passed"
});
formatter.after({
  "duration": 389700,
  "status": "passed"
});
formatter.before({
  "duration": 315400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter the Valid \"vinovicky\" Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enter the Valid \"Jan@2020\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 1204582700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 208108000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 159301200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1147974400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Enter the Valid \"jhon\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Enter the Valid \"32080s\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 702065900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhon",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 167682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32080s",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 150488200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 888676500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.after({
  "duration": 229800,
  "status": "passed"
});
formatter.before({
  "duration": 328600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter the Valid \"vinovicky\" Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enter the Valid \"Jan@2020\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 496596900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 169014800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 162448700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1253967000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 169900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "id": "hotel-booking-functionality;user-need-to-login-the-hotel-booking-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Enter the Valid \"vinovicky\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User Enter the Valid \"Jan@2020\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 641262000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 193072000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 173112500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1042868900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 151300,
  "status": "passed"
});
formatter.after({
  "duration": 259700,
  "status": "passed"
});
formatter.before({
  "duration": 312800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User need to Login the Hotel Booking Application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch the Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter the Valid \"vinovicky\" Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enter the Valid \"Jan@2020\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Validate the Username and Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_Launch_the_Adactin_Application()"
});
formatter.result({
  "duration": 664436700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vinovicky",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Username(String)"
});
formatter.result({
  "duration": 156974000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jan@2020",
      "offset": 22
    }
  ],
  "location": "LoginStepDefinition.user_Enter_the_Valid_Password(String)"
});
formatter.result({
  "duration": 152756900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1502503000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User need to Search for Hotel",
  "description": "",
  "id": "hotel-booking-functionality;user-need-to-search-for-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User Enter the Location",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User Enter the Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Enter the Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User Enter the Number of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Clear the Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Enter the Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Clear the Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Enter the Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter the Adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter the Children per Room",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Location()"
});
formatter.result({
  "duration": 529876200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Hotels()"
});
formatter.result({
  "duration": 248988600,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Room_Type()"
});
formatter.result({
  "duration": 229644100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Number_of_Rooms()"
});
formatter.result({
  "duration": 451568600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with index: 50\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENOVO\u0027, ip: \u0027192.168.43.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.setSelectedByIndex(Select.java:297)\r\n\tat org.openqa.selenium.support.ui.Select.selectByIndex(Select.java:172)\r\n\tat com.adactin.baseclass.Base_Class.dropDown(Base_Class.java:86)\r\n\tat com.adactin.stepdefinition.SearchHotelStepDefinition.user_Enter_the_Number_of_Rooms(SearchHotelStepDefinition.java:40)\r\n\tat ✽.And User Enter the Number of Rooms(src/test/java/com/adactin/feature/Adactin.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Clear_the_Check_In_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Check_In_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Clear_the_Check_Out_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Check_Out_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Adults_per_Room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Children_per_Room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Click_on_Search_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 539415500,
  "status": "passed"
});
});