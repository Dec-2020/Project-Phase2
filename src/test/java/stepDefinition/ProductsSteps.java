package stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;


public class ProductsSteps {
	
WebDriver driver = BaseClass.driver;
	
	@Then("I get Products Details as")
	public void i_get_products_details_as_and(io.cucumber.datatable.DataTable dataTable) {
	    int rows = dataTable.height();
	    
	    for(int i = 0; i < rows; i++) {
	    	String product = dataTable.cell(i, 0);
	    	String price = dataTable.cell(i, 1);
	    	WebElement PPrice = driver.findElement(By.xpath("//div[text()='"+product+"']/following::div[@class='inventory_item_price'][1]"));
	    	Assert.assertEquals(price, PPrice.getText());
	    }
	}
}















