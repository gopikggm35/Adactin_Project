package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel {

	public static WebDriver driver;
	
	@FindBy(id = "radiobutton_0")
	private WebElement radio_btn;

	@FindBy(name = "continue")
	private WebElement continue_btn;
	
	public SelectHotel(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public WebElement getRadio_btn() {
		return radio_btn;
	}

	public WebElement getContinue_btn() {
		return continue_btn;
	}
}
