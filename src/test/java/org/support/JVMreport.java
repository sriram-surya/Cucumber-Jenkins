package org.support;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMreport {

	public static void jvmReportGeneration(String jsonpath) {
		
		File f = new File(System.getProperty("user.dir")+"\\target\\JVMReport");
		Configuration con = new Configuration(f, "Facebook");
		con.addClassifications("Platform", "Windows-10");
		con.addClassifications("Browser", "Chrome");
		List li = new ArrayList<String>();
		li.add(jsonpath);
		ReportBuilder r = new ReportBuilder(li, con);
		r.generateReports();

	}
	
}
