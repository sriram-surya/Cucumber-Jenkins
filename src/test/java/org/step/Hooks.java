package org.step;



import org.junit.AfterClass;
import org.support.BaseClass;
import org.support.JVMreport;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends BaseClass {

	@Before
	public void Browserlaunch() {
		browserLaunch("chrome");
		launchUrl("https://en-gb.facebook.com/");
		driver.manage().window().maximize();
		System.out.println("Before");
	}
	
	
	@After
	public void close() {
		driver.close();
		System.out.println("After");
	}
	

}
