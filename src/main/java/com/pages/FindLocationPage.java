package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import java.util.List;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.utils.BaseClass;

public class FindLocationPage extends BaseClass {
	
	
//	@FindBy(xpath="//input[@type='text']")
//	WebElement locateSearchfield;
	
	@FindBy(xpath="//input[contains(@id,'locatorTextSearch')]")
	WebElement locateSearchfield;
	
	
	//Page factory
	public FindLocationPage(){
		PageFactory.initElements(driver, this);
	}
	
	public void serachbysuburb(String suburb) {
		locateSearchfield.sendKeys(suburb);
		locateSearchfield.submit();
		
	}
		
	public String Verifyserachdsuburb(String result){
		String ele = driver.findElement(By.linkText(result)).getText();
		return ele;
	}
	
}	
		

	
	

