package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Base_Class;
//import com.adactin.pom.LoginPage;
import com.adactin.property.File_Reader_Manager;
import com.adactin.property.Page_Object_Manager;
import com.adactin.runner.Runner;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class LoginStepDefinition extends Base_Class{

	public static WebDriver driver = Runner.driver;
	
//	LoginPage lp = new LoginPage(driver);
	
	Page_Object_Manager pom = new Page_Object_Manager(driver);
	
	@Before
	public void beforeHooks(Scenario script) {
		String status = script.getStatus();
		System.out.println("Scenario status : " + status);
	}
	
	@After
	public void afterHooks(Scenario script) throws Throwable {
		if (script.isFailed()) {
			screenshot("C:\\Users\\ELCOT\\eclipse-workspace\\Adactin_Project\\ScreenShot\\img.png");
		}
		System.out.println("Mission Completed");
	}
	
/*	@Given("^User Launch the Adactin Application$")
	public void user_Launch_the_Adactin_Application() throws Throwable {
		String url = File_Reader_Manager.getInstance().getInstanceCR().getUrl();
		getUrl(url);
	}

	@When("^User Enter the Valid Username$")
	public void user_Enter_the_Valid_Username() throws Throwable {
//		inputOfElement(lp.getUsername(), "SowmiyaSri");
		inputOfElement(pom.getNewLogin().getUsername(),"SowmiyaSri");
	}

	@When("^User Enter the Valid Password$")
	public void user_Enter_the_Valid_Password() throws Throwable {
//		inputOfElement(lp.getPassword(), "Sowmiya05");
		inputOfElement(pom.getNewLogin().getPassword(),"Sowmiya05");
	}

	@When("^User Click on Login$")
	public void user_Click_on_Login() throws Throwable {
//		clickOnElement(lp.getLogin());
		clickOnElement(pom.getNewLogin().getLogin());
	}

	@Then("^User Validate the Username and Password$")
	public void user_Validate_the_Username_and_Password() throws Throwable {
		
	}*/

	
	
	@Given("^User Launch the Adactin Application$")
	public void user_Launch_the_Adactin_Application() throws Throwable {
		String url = File_Reader_Manager.getInstance().getInstanceCR().getUrl();
		getUrl(url);
	}

	@When("^User Enter the Valid \"([^\"]*)\" Username$")
	public void user_Enter_the_Valid_Username(String arg1) throws Throwable {
		inputOfElement(pom.getNewLogin().getUsername(), arg1);
	}

	@When("^User Enter the Valid \"([^\"]*)\" Password$")
	public void user_Enter_the_Valid_Password(String arg1) throws Throwable {
		inputOfElement(pom.getNewLogin().getPassword(), arg1);
	}

	@When("^User Click on Login$")
	public void user_Click_on_Login() throws Throwable {
		clickOnElement(pom.getNewLogin().getLogin());
	}

	@Then("^User Validate the Username and Password$")
	public void user_Validate_the_Username_and_Password() throws Throwable {
	}
	

}
