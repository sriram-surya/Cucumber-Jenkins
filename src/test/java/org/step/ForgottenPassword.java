package org.step;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.support.BaseClass;

import cucumber.api.java.en.When;

public class ForgottenPassword extends BaseClass {
	
	 

	@When("user has to click the forgotten password text")
	public void userHasToClickTheForgottenPasswordText() throws InterruptedException {
		Thread.sleep(3000);
	 driver.findElement(By.xpath("//a[text()='Forgotten password?']")).click();
	}

	@When("user has to navigate to forgotten password page")
	public void userHasToNavigateToForgottenPasswordPage() throws InterruptedException {
		Thread.sleep(3000);
	   String currentUrl = driver.getCurrentUrl();
	   Assert.assertTrue(currentUrl.contains("facebook"));
	}

	@When("User has to enter the phone number or Email in the textbox")
	public void userHasToEnterThePhoneNumberOrEmailInTheTextbox(io.cucumber.datatable.DataTable d) throws InterruptedException {
		Thread.sleep(3000);
		List<Map<String, String>> ms = d.asMaps();
	
		driver.findElement(By.xpath("(//input[@name='email'])[2]")).sendKeys(ms.get(1).get("Data2"));
	}

	@When("user has to click the search button")
	public void userHasToClickTheSearchButton() throws InterruptedException {
		Thread.sleep(3000);
	   driver.findElement(By.xpath("//button[text()='Search']")).click();
}
}