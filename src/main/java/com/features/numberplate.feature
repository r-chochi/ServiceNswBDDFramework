Feature: Apply for a number plate in servicensw gov feature
#Author: Rashmi AG

@ANP
Scenario Outline: Verify that the application returns serached Service Centre for ANP

Given am on the service NSW Page
When I search for "Apply for number plate"
Then I should see Apply for number plate link
And I click on Locate us button
Then I enter suburb name as "<suburb>"
And I should see the available suburb name "<servicecenter>"

Examples:
|suburb | servicecentre|
|Newtown 2042| |Marrickville Service Centre|
|Sydney Domestic Airport 2020||Botany Service Centre|
|Surry Hills 2010 ||Haymarket Service Centre|