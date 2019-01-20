package com.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.utils.BaseClass;

public class HomePage extends BaseClass{
	
	//Page Factory -
//			@FindBy(name="contains")
//			WebElement searchfield;
	
//	@FindBy(xpath="//button[contains(text(),'Sign Up')]")
//	WebElement signUpBtn;
	
//	@FindBy(xpath="//input[@type='submit']")
//	WebElement loginBtn;
	
	
			@FindBy(xpath="//input[@type='text']")
			WebElement searchfield;
			
			@FindBy(name="Search")
			WebElement searchBtn;
			
			@FindBy(xpath="//img[contains(@src,'https://www.service.nsw.gov.au/sites/all/themes/custom/snsw_theme/logo.png')]")
			WebElement serviceNSWLogo;
			
			
			//Initializing the Page Objects:
			public HomePage(){
				PageFactory.initElements(driver, this);
			}
			
			public SearchResultPage Searchfor(String searchkey) {
				searchfield.sendKeys(searchkey);
				searchBtn.clear();
				//locateUs.click();
				return new SearchResultPage();
			}
			
			public String validateHomePageTitle(){
				return driver.getTitle();
				
			}
				
				public boolean validateServiceNswImage(){
					return serviceNSWLogo.isDisplayed();
				}
			
			

			
			
			
	
	
	
	
	
	
	
	
	

}
