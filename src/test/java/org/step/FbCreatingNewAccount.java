package org.step;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.support.PojoFb;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FbCreatingNewAccount  {
static WebDriver driver;
static PojoFb l1;
	@Given("user has to launch the browser")
	public void userHasToLaunchTheBrowser() {
	   WebDriverManager.chromedriver().setup();
	   driver = new ChromeDriver();
	}

	@When("user has to launch the Url and click create new account button")
	public void userHasToLaunchTheUrlAndClickCreateNewAccountButton() {
	    driver.get("https://en-gb.facebook.com/");
	    driver.findElement(By.xpath("//a[text()='Create new account']")).click();
		
	}

	@When("user has to navigate to create new account page")
	public void userHasToNavigateToCreateNewAccountPage() {
	   String currentUrl = driver.getCurrentUrl();
		Assert.assertEquals(currentUrl,"https://en-gb.facebook.com/");
		System.out.println("successfull");
	}

	@When("user has to enter the Firstname and secondname")
	public void userHasToEnterTheFirstnameAndSecondname(io.cucumber.datatable.DataTable d) throws InterruptedException {
	    List<String> l = d.asList();
	    String firstn = l.get(0);
	    String secondn = l.get(1);
	    PojoFb l1 = new PojoFb();
	 //   Thread.sleep(3000);
	    driver.findElement(By.xpath("(//input[@type='text'])[2]")).sendKeys(firstn);
	  //  Thread.sleep(3000);
	    driver.findElement(By.xpath("(//input[@type='text'])[3]")).sendKeys(secondn);
	}

	@When("user has to enter the moblie number or email id")
	public void userHasToEnterTheMoblieNumberOrEmailId(io.cucumber.datatable.DataTable d) throws InterruptedException {
	 List<List<String>> asLists = d.asLists();
	// Thread.sleep(3000);
		driver.findElement(By.xpath("(//input[@type='text'])[4]")).sendKeys(asLists.get(0).get(2));
	}

	@When("user has to click the gender icon")
	public void userHasToClickTheGenderIcon() throws InterruptedException {
		//Thread.sleep(3000);
	   driver.findElement(By.xpath("(//input[@name='sex'])[2]")).click();
	}

	@When("user has to click signup button")
	public void userHasToClickSignupButton() {
	    driver.findElement(By.xpath("//button[text()='Sign Up']")).click();
	}

	@Then("user has to navigate to homepage")
	public void userHasToNavigateToHomepage() {
	  driver.close();
	}
}
