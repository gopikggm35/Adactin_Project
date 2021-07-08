package com.adactin.property;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.pom.LoginPage;
import com.adactin.pom.PersonalDetails;
import com.adactin.pom.SearchHotel;
import com.adactin.pom.SelectHotel;

public class Page_Object_Manager {

	public static WebDriver driver;
	
	private LoginPage lp;
	
	private PersonalDetails pd;
	
	private SelectHotel sl;
	
	private SearchHotel sh;
	
	public Page_Object_Manager(WebDriver driverchrm) {
		this.driver = driverchrm;
		PageFactory.initElements(driverchrm, this);
	}
	
	public LoginPage getNewLogin() {
		lp = new LoginPage(driver);
		return lp;
	}
	
	public PersonalDetails getNewPersonalDetails() {
		pd = new PersonalDetails(driver);
		return pd;
	}

	public SelectHotel getNewSelectHotel() {
		sl = new SelectHotel(driver);
		return sl;
	}
	
	public SearchHotel getNewSearchHotel() {
		sh = new SearchHotel(driver);
		return sh;
	}
}
