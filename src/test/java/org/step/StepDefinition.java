package org.step;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class StepDefinition {
	static WebDriver driver;
//================================================================================================

	@Given("user has to open the Chrome browser and maximize the window")
	public void userHasToOpenTheChromeBrowserAndMaximizeTheWindow() {
		   WebDriverManager.chromedriver().setup();
		     driver = new ChromeDriver();
	}

	@When("user has to launch the required Url")
	public void userHasToLaunchTheRequiredUrl() {
		driver.get("https://en-gb.facebook.com/");
	}

	@When("user has to enter the value in userbox and passwordbox")
	public void userHasToEnterTheValueInUserboxAndPasswordbox() {
		driver.findElement(By.id("email")).sendKeys("surya");
	    driver.findElement(By.id("pass")).sendKeys("surya1234");
	}

	@When("user has to click the login")
	public void userHasToClickTheLogin() {
		driver.findElement(By.xpath("//button[text()='Log in']")).click();
	}
	@Then("user has navigate to homepage")
	public void userHasNavigateToHomepage() {
	    driver.close();
	    System.out.println("closed");
	}

	@When("user has to launch the Url")
	public void userHasToLaunchTheUrl() {
		driver.get("https://en-gb.facebook.com/");
	}

	@When("user has to enter the value {string} in username and{string} in password")
	public void userHasToEnterTheValueInUsernameAndInPassword(String user, String pass) {
		driver.findElement(By.id("email")).sendKeys(user);
	    driver.findElement(By.id("pass")).sendKeys(pass);
	}
	@When("user has to click the login button")
	public void userHasToClickTheLoginButton() {
		driver.findElement(By.xpath("//button[text()='Log in']")).click(); 
	}

	
	@Then("user has navigate to error page")
	public void user_has_navigate_to_error_page() {
	   driver.quit();
	}
}
