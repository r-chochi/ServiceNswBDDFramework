package com.stepDefinations;

import com.pages.FindLocationPage;
import com.pages.HomePage;
import com.pages.SearchResultPage;
import com.utils.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class NumberPlateSteps extends BaseClass{
	
	HomePage homepage = new HomePage();
	SearchResultPage searchPage;
	FindLocationPage findLocationPage;
	
	
	@Given("^am on the service NSW Page$")
	public void am_on_the_service_NSW_Page() throws Throwable {
 	Assert.assertTrue(homepage.validateServiceNswImage());
		
	}

	@When("^I search for \"([^\"]*)\"$")
	public void i_search_for(String searchkey) throws Throwable {
		searchPage = homepage.Searchfor(searchkey);
	}

	@Then("^I should see Apply for number plate link$")
	public void i_should_see_Apply_for_number_plate_link() throws Throwable {
		Assert.assertTrue(searchPage.verifyapplyNoPlate());
	   
	}

	@Then("^I click on Locate us button$")
	public void i_click_on_Locate_us_button() throws Throwable {
		findLocationPage = searchPage.clickOnLocateLink();
	    
	}

	@Then("^I enter suburb name as \"([^\"]*)\"$")
	public void i_enter_suburb_name_as(String suburb) throws Throwable {
		
		findLocationPage.serachbysuburb(suburb);
		
	}

	@Then("^I should see the available suburb name \"([^\"]*)\"$")
	public void i_should_see_the_available_suburb_name(String servicecenter) throws Throwable {
		String SC = findLocationPage.Verifyserachdsuburb(servicecenter);
		 Assert.assertEquals(SC, servicecenter);
	}
}
