package com.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"F:/TestAutomation/ServiceNswBDDFramework/src/main/java/com/features"},
		glue = {"com/stepDefinations"},
		monochrome = true, 
		tags = {"@ANP"},
		
		plugin= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"})


public class TestRunner {

}
 