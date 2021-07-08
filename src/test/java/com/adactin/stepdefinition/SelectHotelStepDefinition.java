package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Base_Class;
//import com.adactin.pom.SelectHotel;
import com.adactin.property.Page_Object_Manager;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;

public class SelectHotelStepDefinition extends Base_Class {

	public static WebDriver driver = Runner.driver;
	
//	SelectHotel sl = new SelectHotel(driver);
	
	Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	@When("^User Click on Radio Button$")
	public void user_Click_on_Radio_Button() throws Throwable {
//		clickOnElement(sl.getRadio_btn());
		clickOnElement(pom.getNewSelectHotel().getRadio_btn());
	}

	@Then("^User Click on Continue Button$")
	public void user_Click_on_Continue_Button() throws Throwable {
//		clickOnElement(sl.getContinue_btn());
		clickOnElement(pom.getNewSelectHotel().getContinue_btn());
	}
}
