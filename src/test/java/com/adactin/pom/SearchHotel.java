package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel {

	public static WebDriver driver;
	
	@FindBy(id = "location")
	private WebElement location;
	
	@FindBy(name = "hotels")
	private WebElement hotel;
	
	@FindBy(id = "room_type")
	private WebElement roomType;
	
	@FindBy(name = "room_nos")
	private WebElement numberOfRooms;
	
	@FindBy(name = "datepick_in")
	private WebElement clearChk_in;
	
	@FindBy(xpath = "(//input[@type=\"text\"])[2]")
	private WebElement checkInDate;
	
	@FindBy(id = "datepick_out")
	private WebElement clearChk_out;

	@FindBy(xpath = "(//input[@type=\"text\"])[3]")
	private WebElement checkOutDate; 
	
	@FindBy(id = "adult_room")
	private WebElement adultPerRoom;
	
	@FindBy(id = "child_room")
	private WebElement childPerRoom;
	
	@FindBy(name = "Submit")
	private WebElement submit;
	
	
	public SearchHotel(WebDriver driver2) {
		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}
 
	public WebElement getLocation() {
		return location;
	}

	public WebElement getHotel() {
		return hotel;
	}

	public WebElement getRoomType() {
		return roomType;
	}

	public WebElement getNumberOfRooms() {
		return numberOfRooms;
	}

	public WebElement getClearChk_in() {
		return clearChk_in;
	}

	public WebElement getCheckInDate() {
		return checkInDate;
	}

	public WebElement getClearChk_out() {
		return clearChk_out;
	}

	public WebElement getCheckOutDate() {
		return checkOutDate; 
	} 
	
	public WebElement getAdultPerRoom() {
		return adultPerRoom;
	}

	public WebElement getChildPerRoom() {
		return childPerRoom;
	}

	public WebElement getSubmit() {
		return submit;
	}

}
