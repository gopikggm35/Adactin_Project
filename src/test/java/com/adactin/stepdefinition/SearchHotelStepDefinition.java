package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;
import com.adactin.baseclass.Base_Class;
//import com.adactin.pom.SearchHotel;
import com.adactin.property.Page_Object_Manager;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;

public class SearchHotelStepDefinition extends Base_Class{

	public static WebDriver driver = Runner.driver;
	
//	SearchHotel sh = new SearchHotel(driver);
	
	Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	@When("^User Enter the Location$")
	public void user_Enter_the_Location() throws Throwable {
//		dropDown(sh.getLocation(), "byValue", "Sydney");
		dropDown(pom.getNewSearchHotel().getLocation(), "byValue", "Sydney");
	}

	@When("^User Enter the Hotels$")
	public void user_Enter_the_Hotels() throws Throwable {
//		dropDown(sh.getHotel(), "byVisibleText", "Hotel Creek");
		dropDown(pom.getNewSearchHotel().getHotel(), "byVisibleText", "Hotel Creek");
	}

	@When("^User Enter the Room Type$")
	public void user_Enter_the_Room_Type() throws Throwable {
//		dropDown(sh.getRoomType(), "byValue", "Super Deluxe");
		dropDown(pom.getNewSearchHotel().getRoomType(), "byValue", "Super Deluxe");
	}

	@When("^User Enter the Number of Rooms$")
	public void user_Enter_the_Number_of_Rooms() throws Throwable {
//		dropDown(sh.getNumberOfRooms(), "byIndex", "3");
		dropDown(pom.getNewSearchHotel().getNumberOfRooms(), "byIndex", "3");
	}

	@When("^User Clear the Check In Date$")
	public void user_Clear_the_Check_In_Date() throws Throwable {
//		clearOnElement(sh.getClearChk_in());
		clearOnElement(pom.getNewSearchHotel().getClearChk_in());
	}

	@When("^User Enter the Check In Date$")
	public void user_Enter_the_Check_In_Date() throws Throwable {
//		inputOfElement(sh.getCheckInDate(), "12/11/2021");
		inputOfElement(pom.getNewSearchHotel().getCheckInDate(), "12/11/2021");
	}

	@When("^User Clear the Check Out Date$")
	public void user_Clear_the_Check_Out_Date() throws Throwable {
//		clearOnElement(sh.getClearChk_out());
		clearOnElement(pom.getNewSearchHotel().getClearChk_out());
	}

	@When("^User Enter the Check Out Date$")
	public void user_Enter_the_Check_Out_Date() throws Throwable {
//		inputOfElement(sh.getCheckOutDate(), "23/11/2021");
		inputOfElement(pom.getNewSearchHotel().getCheckOutDate(), "23/11/2021");
	} 

	@When("^user Enter the Adults per Room$")
	public void user_Enter_the_Adults_per_Room() throws Throwable {
//		dropDown(sh.getAdultPerRoom(), "byIndex", "2");
		dropDown(pom.getNewSearchHotel().getAdultPerRoom(), "byIndex", "2");
	}

	@When("^User Enter the Children per Room$")
	public void user_Enter_the_Children_per_Room() throws Throwable {
//		dropDown(sh.getChildPerRoom(), "byIndex", "1");
		dropDown(pom.getNewSearchHotel().getChildPerRoom(), "byIndex", "1");
	}

	@Then("^User Click on Search Button$")
	public void user_Click_on_Search_Button() throws Throwable {
//		clickOnElement(sh.getSubmit());
		clickOnElement(pom.getNewSearchHotel().getSubmit());
	}
	
}
