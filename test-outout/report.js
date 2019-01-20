$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("numberplate.feature");
formatter.feature({
  "line": 1,
  "name": "Apply for a number plate in servicensw gov feature",
  "description": "",
  "id": "apply-for-a-number-plate-in-servicensw-gov-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify that the application returns serached Service Centre for ANP",
  "description": "",
  "id": "apply-for-a-number-plate-in-servicensw-gov-feature;verify-that-the-application-returns-serached-service-centre-for-anp",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ANP"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on the service NSW Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search for \"Apply for number plate\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see Apply for number plate link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter suburb name as \"\u003csuburb\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the available suburb name \"\u003cservicecenter\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#When title of the page is serviceNSW"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "apply-for-a-number-plate-in-servicensw-gov-feature;verify-that-the-application-returns-serached-service-centre-for-anp;",
  "rows": [
    {
      "cells": [
        "suburb",
        "servicecentre"
      ],
      "line": 16,
      "id": "apply-for-a-number-plate-in-servicensw-gov-feature;verify-that-the-application-returns-serached-service-centre-for-anp;;1"
    },
    {
      "cells": [
        "Newtown 2042",
        "",
        "Marrickville Service Centre"
      ],
      "line": 17,
      "id": "apply-for-a-number-plate-in-servicensw-gov-feature;verify-that-the-application-returns-serached-service-centre-for-anp;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that the application returns serached Service Centre for ANP",
  "description": "",
  "id": "apply-for-a-number-plate-in-servicensw-gov-feature;verify-that-the-application-returns-serached-service-centre-for-anp;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ANP"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "am on the service NSW Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I search for \"Apply for number plate\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see Apply for number plate link",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on Locate us button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter suburb name as \"Newtown 2042\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the available suburb name \"\u003cservicecenter\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "NumberPlateSteps.am_on_the_service_NSW_Page()"
});
formatter.result({
  "duration": 136283468,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.stepDefinations.NumberPlateSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\r\n\t... 50 more\r\nCaused by: java.lang.NullPointerException\r\n\tat java.io.FileInputStream.\u003cinit\u003e(Unknown Source)\r\n\tat java.io.FileInputStream.\u003cinit\u003e(Unknown Source)\r\n\tat com.utils.BaseClass.\u003cinit\u003e(BaseClass.java:27)\r\n\tat com.pages.HomePage.\u003cinit\u003e(HomePage.java:33)\r\n\tat com.stepDefinations.NumberPlateSteps.\u003cinit\u003e(NumberPlateSteps.java:19)\r\n\t... 55 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for number plate",
      "offset": 14
    }
  ],
  "location": "NumberPlateSteps.i_search_for(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NumberPlateSteps.i_should_see_Apply_for_number_plate_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NumberPlateSteps.i_click_on_Locate_us_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Newtown 2042",
      "offset": 24
    }
  ],
  "location": "NumberPlateSteps.i_enter_suburb_name_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cservicecenter\u003e",
      "offset": 40
    }
  ],
  "location": "NumberPlateSteps.i_should_see_the_available_suburb_name(String)"
});
formatter.result({
  "status": "skipped"
});
});