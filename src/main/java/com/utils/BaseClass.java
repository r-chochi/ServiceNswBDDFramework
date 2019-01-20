package com.utils;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.utils.TestUtil;

public class BaseClass {

	//Global variables 
	
		public static WebDriver driver;
		public static Properties prop;
		
		
		public BaseClass(){
			try {
				prop = new Properties();
				FileInputStream ip = new FileInputStream(System.getProperty("F:/TestAutomation/ServiceNswBDDFramework"
						+ "/src/main/java/com/qa/config/config.properties"));
						
				prop.load(ip);
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		public static void initialization(){
			String browserName = prop.getProperty("browser");
			
			if(browserName.equals("chrome")){
				System.setProperty("webdriver.chrome.driver", "/F:/Rashu Automation/SeleniumDrivers/chromedriver");	
				driver = new ChromeDriver(); 
			}
			else if(browserName.equals("FF")){
				System.setProperty("webdriver.gecko.driver", "/F:/Rashu Automation/SeleniumDrivers/geckodriver");	
				driver = new FirefoxDriver(); 
			}
		
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			 
			driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
			
			driver.get(prop.getProperty("url"));
		}
		
}
