package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.utils.BaseClass;

public class SearchResultPage extends BaseClass{
	
	@FindBy(xpath="//a[contains(text(),'Apply for a number plate')]")
	WebElement applyNoPlate;
	
	@FindBy(xpath="//a[contains(text(),'Locate us')]")
	WebElement locateUs;
	
//	@FindBy(xpath="//input[@type='text']")
//	WebElement searchfield;
	

	public SearchResultPage(){
		PageFactory.initElements(driver, this);
	}
	
	
	public boolean verifyapplyNoPlate(){
		return applyNoPlate.isDisplayed();
	}
	
	public FindLocationPage clickOnLocateLink(){
		locateUs.clear();
		return new FindLocationPage();
		
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
