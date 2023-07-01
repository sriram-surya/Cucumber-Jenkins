package org.support;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoFb extends BaseClass {

	public PojoFb() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name = "firstname")
	private WebElement firstName;
	
	@FindBy(name = "lastname")
	private WebElement secondName;
	
	@FindBy(xpath = "(//input[@type='text'])[4]")
	private WebElement moblienum;

	public WebElement getFirstName() {
		return firstName;
	}

	public WebElement getSecondName() {
		return secondName;
	}

	public WebElement getMoblienum() {
		return moblienum;
	}
}
