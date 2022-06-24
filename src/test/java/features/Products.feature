@ProductsFeature
Feature: Products Page

  Background: To open browser
    Given I open browser
    When I enter "standard_user" and "secret_sauce"
    And I click on Login Button
    Then I get redirected to Products Page

  @Regression
  Scenario: Validate prices of the Products
    And I get Products Details as
      | Sauce Labs Fleece Jacket | $49.99 |
      | Sauce Labs Onesie        | $7.99  |
