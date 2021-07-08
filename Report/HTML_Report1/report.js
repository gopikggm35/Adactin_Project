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
  "duration": 175530000,
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
  "duration": 11185584100,
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
  "duration": 2757818400,
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
  "duration": 681386100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 4298549000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 58400,
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
  "duration": 1558909000,
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
  "duration": 152187500,
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
  "duration": 169028100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 941640800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.after({
  "duration": 336000,
  "status": "passed"
});
formatter.before({
  "duration": 587900,
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
  "duration": 564946700,
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
  "duration": 167562800,
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
  "duration": 174880700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1327268100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 50900,
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
  "duration": 1137918500,
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
  "duration": 160539200,
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
  "duration": 150315200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 616473300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.after({
  "duration": 207100,
  "status": "passed"
});
formatter.before({
  "duration": 243100,
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
  "duration": 596061000,
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
  "duration": 168582700,
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
  "duration": 179661800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 988508800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 65400,
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
  "duration": 1033416700,
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
  "duration": 240378200,
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
  "duration": 191784900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1711472300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 131800,
  "status": "passed"
});
formatter.after({
  "duration": 272200,
  "status": "passed"
});
formatter.before({
  "duration": 268000,
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
  "duration": 841818900,
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
  "duration": 145355600,
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
  "duration": 147336800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Click_on_Login()"
});
formatter.result({
  "duration": 1010822500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_Validate_the_Username_and_Password()"
});
formatter.result({
  "duration": 42800,
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
  "duration": 878140400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Hotels()"
});
formatter.result({
  "duration": 290786500,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Room_Type()"
});
formatter.result({
  "duration": 223892200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Number_of_Rooms()"
});
formatter.result({
  "duration": 311363100,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Clear_the_Check_In_Date()"
});
formatter.result({
  "duration": 163055400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Check_In_Date()"
});
formatter.result({
  "duration": 1450942400,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Clear_the_Check_Out_Date()"
});
formatter.result({
  "duration": 119409200,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Check_Out_Date()"
});
formatter.result({
  "duration": 156217900,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Adults_per_Room()"
});
formatter.result({
  "duration": 285040700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Enter_the_Children_per_Room()"
});
formatter.result({
  "duration": 250433700,
  "status": "passed"
});
formatter.match({
  "location": "SearchHotelStepDefinition.user_Click_on_Search_Button()"
});
formatter.result({
  "duration": 1687017200,
  "status": "passed"
});
formatter.after({
  "duration": 214900,
  "status": "passed"
});
});