package org.test;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.support.JVMreport;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources",
glue = "org.step",
snippets =SnippetType.CAMELCASE ,
dryRun  = false,
monochrome = true,
plugin = {"html:target",
		"json:target\\Report\\FB.json",
		"junit:target\\Report\\Fb.xml",
		"rerun:rerun\\FB.txt"})
           
public class TestRunner {

	@AfterClass
	public static void reportGeneration() {
		JVMreport.jvmReportGeneration(System.getProperty("user.dir")+"\\target\\Report\\FB.json");

	}
}
