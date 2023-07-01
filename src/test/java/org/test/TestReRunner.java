package org.test;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.runner.RunWith;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.support.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@rerun\\FB.txt",
glue = "org.step",
snippets =SnippetType.CAMELCASE ,
dryRun  = false,
monochrome = true,
plugin = {"html:target",
		"json:target\\Report\\FB.json",
		"junit:target\\Report\\Fb.xml",
		"rerun:rerun\\FB.txt"})
public class TestReRunner extends BaseClass {

	@After 
	private void Screenshot(Scenario s) throws IOException {
		
		if (s.isFailed()) {
			String name1 = s.getName();
		     String name = name1.replace(" ", "_");
			TakesScreenshot ts = (TakesScreenshot) driver;
			 File src = ts.getScreenshotAs(OutputType.FILE);
			 File des = new File("C:\\Users\\S U R Y A\\eclipse-workspace\\Cucumber\\Screenshot"+name+".png");
			 FileUtils.copyFile(src, des);
			
		}

	}
}
