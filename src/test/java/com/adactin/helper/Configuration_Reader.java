package com.adactin.helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configuration_Reader {

	public static Properties p;

	public Configuration_Reader() throws Throwable { // constructor

		File f = new File(
				"C:\\Users\\ELCOT\\eclipse-workspace\\Adactin_Project\\src\\test\\java\\com\\adactin\\property\\Configuration.properties");
		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}

	public String getBrowser() {
		String browser = p.getProperty("browser");
		return browser;
	}

	public String getUrl() {
		String url = p.getProperty("url");
		return url;
	}

	public String getCvv() {
		String cvv = p.getProperty("cvv");
		return cvv;
	}
	
	public String getCreditCARD() {
		String creditcard = p.getProperty("creditcard");
		return creditcard;
	}
	
	public String getcreditcardtype() {
		String creditcardtype = p.getProperty("creditcardtype");
		return creditcardtype;
	}
	
	public String getMonth() {
		String Month = p.getProperty("Month");
		return Month;
	}
	
	public String getYear() {
		String Year = p.getProperty("Year");
		return Year;
	}
	
	
	
	
}
