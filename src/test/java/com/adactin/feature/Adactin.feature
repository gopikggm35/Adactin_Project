Feature: Hotel Booking Functionality

Background: User need to Login the Hotel Booking Application
	Given User Launch the Adactin Application
	When User Enter the Valid "vinovicky" Username
	And User Enter the Valid "Jan@2020" Password
	And User Click on Login
	Then User Validate the Username and Password

@Login
Scenario Outline: User need to Login the Hotel Booking Application
	Given User Launch the Adactin Application
	When User Enter the Valid "<Username>" Username
	And User Enter the Valid "<Password>" Password
	And User Click on Login
	Then User Validate the Username and Password 
	
	Examples:
	
		|Username|Password|
		|jack|3108dk|
		|jhon|32080s|
		|vinovicky|Jan@2020|

@Search	
Scenario: User need to Search for Hotel
    When User Enter the Location
    And User Enter the Hotels
    And User Enter the Room Type
    And User Enter the Number of Rooms
    And User Clear the Check In Date
    And User Enter the Check In Date
    And User Clear the Check Out Date
    And User Enter the Check Out Date
    And user Enter the Adults per Room
    And User Enter the Children per Room  
    Then User Click on Search Button
   
@Select 
@SmokeTest  
Scenario: User need to Select for Hotel
    When User Click on Radio Button
    Then User Click on Continue Button   

@Personal
@SmokeTest  
Scenario: User need to Enter their Personal Details
    When User Enter his/her First Name
    And User Enter his/her Last Name
    And User Enter his/her Address
    And User Enter his/her Credit Card
    And User Enter Credit Card Type
    And User Enter Month
    And User Enter Year
    And User Enter CVV Number
   Then  User Click on Book Now Button
    
      