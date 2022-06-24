package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	
WebDriver driver = BaseClass.driver;
	
	@FindBy(id = "user-name")
	WebElement UserName;
	
	@FindBy(id = "password")
	WebElement Password;
	
	@FindBy(id = "login-button")
	WebElement LoginBtn;
	
	@FindBy(xpath = "//*[starts-with(text(),'Epic sadface:')]")
	WebElement ActualErrorMsg;
	
	public LoginSteps() {
		
		PageFactory.initElements(driver, this);
		
	}
	
	@Given("I open browser")
	public void i_open_browser() {
	    
	}

	@When("I enter {string} and {string}")
	public void i_enter_correct_and(String UserNameVal, String PasswordVal) {
		UserName.sendKeys(UserNameVal);
		Password.sendKeys(PasswordVal);
	}

	@Then("I get redirected to Products Page")
	public void i_get_redirected_to_products_page() {
	    
	}

	@Then("I get error message as {string}")
	public void i_get_error_message_as(String ExpectedErrorMsg) {		
		Assert.assertEquals(ActualErrorMsg.getText(), ExpectedErrorMsg);
	}
	
	@When("I click on Login Button")
	public void i_click_on_login_button() {
		LoginBtn.click();
	}

}
