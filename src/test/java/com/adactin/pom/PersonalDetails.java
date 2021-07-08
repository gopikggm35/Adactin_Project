package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PersonalDetails {

	public static WebDriver driver;
	
	@FindBy(id = "first_name")
	private WebElement firstName;
	
	@FindBy(name = "last_name")
	private WebElement lastName;
	
	@FindBy(name = "address")
	private WebElement address;
	
	@FindBy(name = "cc_num")
	private WebElement creditcard;
	
	@FindBy(id = "cc_type")
	private WebElement creditCardType;

	@FindBy(name = "cc_exp_month")
	private WebElement month;
	
	@FindBy(name = "cc_exp_year")
	private WebElement year;
	
	@FindBy(name = "cc_cvv")
	private WebElement cvv;
	
	@FindBy(name = "book_now")
	private WebElement book;
	
	public PersonalDetails(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public WebElement getFirstName() {
		return firstName;
	}

	public WebElement getLastName() {
		return lastName;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCreditcard() {
		return creditcard;
	}

	public WebElement getCreditCardType() {
		return creditCardType;
	}

	public WebElement getMonth() {
		return month;
	}

	public WebElement getYear() {
		return year;
	}

	public WebElement getCvv() {
		return cvv;
	}
	
	public WebElement getBook() {
		return book;
	}
	

}
