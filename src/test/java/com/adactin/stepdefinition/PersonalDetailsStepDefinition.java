package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Base_Class;
import com.adactin.property.File_Reader_Manager;
//import com.adactin.pom.PersonalDetails;
import com.adactin.property.Page_Object_Manager;
import com.adactin.runner.Runner;

import cucumber.api.java.en.*;

public class PersonalDetailsStepDefinition extends Base_Class {

	public static WebDriver driver = Runner.driver;
	
//	PersonalDetails pd = new PersonalDetails(driver);
	
	Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	@When("^User Enter his/her First Name$")
	public void user_Enter_his_her_First_Name() throws Throwable {
//		inputOfElement(pd.getFirstName(), "Jhonny");
		inputOfElement(pom.getNewPersonalDetails().getFirstName(), "Jhonny");
	}

	@When("^User Enter his/her Last Name$")
	public void user_Enter_his_her_Last_Name() throws Throwable {
//		inputOfElement(pd.getLastName(), "Depp");
		inputOfElement(pom.getNewPersonalDetails().getLastName(), "Depp");
	}

	@When("^User Enter his/her Address$")
	public void user_Enter_his_her_Address() throws Throwable {
//		inputOfElement(pd.getAddress(), "48,Whitmann Cross Road,Los Angels");
		inputOfElement(pom.getNewPersonalDetails().getAddress(), "48,Whitmann Cross Road,Los Angels");
	}

	@When("^User Enter his/her Credit Card$")
	public void user_Enter_his_her_Credit_Card() throws Throwable {
//		inputOfElement(pd.getCreditcard(), "6893282943040890");
		String creditCARD = File_Reader_Manager.getInstance().getInstanceCR().getCreditCARD();
		inputOfElement(pom.getNewPersonalDetails().getCreditcard(), creditCARD);
	}

	@When("^User Enter Credit Card Type$")
	public void user_Enter_Credit_Card_Type() throws Throwable {
//		dropDown(pd.getCreditCardType(), "byValue", "VISA");
		String creditcardtype = File_Reader_Manager.getInstance().getInstanceCR().getcreditcardtype();
		dropDown(pom.getNewPersonalDetails().getCreditCardType(), "byValue", creditcardtype);
	}

	@When("^User Enter Month$")
	public void user_Enter_Month() throws Throwable {
//		dropDown(pd.getMonth(), "byIndex", "3");
		String Month = File_Reader_Manager.getInstance().getInstanceCR().getMonth();
		dropDown(pom.getNewPersonalDetails().getMonth(), "byIndex", Month);
	}

	@When("^User Enter Year$")
	public void user_Enter_Year() throws Throwable {
//		dropDown(pd.getYear(), "byVisibleText", "2013");
		String Year = File_Reader_Manager.getInstance().getInstanceCR().getYear();
		dropDown(pom.getNewPersonalDetails().getYear(), "byVisibleText", Year);
	}

	@When("^User Enter CVV Number$")
	public void user_Enter_CVV_Number() throws Throwable {
//		inputOfElement(pd.getCvv(), "577");
		String cvv = File_Reader_Manager.getInstance().getInstanceCR().getCvv();
		inputOfElement(pom.getNewPersonalDetails().getCvv(), cvv);
	}
	
	@Then("^User Click on Book Now Button$")
	public void user_Click_on_Book_Now_Button() throws Throwable {
//		clickOnElement(pd.getBook());
		clickOnElement(pom.getNewPersonalDetails().getBook());
	}
	
}
