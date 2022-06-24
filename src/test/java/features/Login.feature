@LoginFeature
Feature: Login Page

  Background: To open browser
    Given I open browser
    When I enter "<UserName>" and "<Password>"
    And I click on Login Button

  Scenario Outline: Positive Login
    Then I get redirected to Products Page

    Examples: 
      | UserName        | Password     |
      | standard_user   | secret_sauce |
      | locked_out_user | secret_sauce |

  Scenario Outline: Negative Login
    Then I get error message as "<ExpectedErrorMsg>"

    Examples: 
      | UserName        | Password      | ExpectedErrorMsg                                                          |
      | standard_user   | secret_sauce5 | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce7 | Epic sadface: Username and password do not match any user in this service |
