$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I get redirected to Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "To open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_correct_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I get redirected to Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_get_redirected_to_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "To open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_correct_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Positive Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I get redirected to Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_get_redirected_to_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Products Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductsFeature"
    }
  ]
});
formatter.background({
  "name": "To open browser",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_enter_correct_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get redirected to Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_get_redirected_to_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate prices of the Products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProductsFeature"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I get Products Details as",
  "rows": [
    {
      "cells": [
        "Sauce Labs Fleece Jacket",
        "$49.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Onesie",
        "$7.99"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ProductsSteps.i_get_products_details_as_and(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});