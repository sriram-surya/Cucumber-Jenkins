package org.support;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	protected static WebDriver driver;
	
	public static void browserLaunch(String browser) {
		
		switch (browser) {
		case "chrome":
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			break;

		case "edge":
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
			break;
			
		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			break;
		}
	}
	
	public static void launchUrl(String url) {
		driver.get(url);
		driver.manage().window().maximize();
	}
	
	public static void getTitle() {
		String title = driver.getTitle();
		System.out.println(title);
	}
	
	public static void getCurrentUrl() {
		String currentUrl = driver.getCurrentUrl();
		System.out.println(currentUrl);
	}
	
	public static void passValue(WebElement element,String key) {
		element.sendKeys(key);
	}
	
	public static void elementClick(WebElement element) {
		element.click();
	}
	
	public static void moveToElement(WebElement element) {
		Actions a = new Actions (driver);
		a.moveToElement(element).perform();
	}
	
	public static void dragAndDrop(WebElement src,WebElement des) {
		Actions a = new Actions (driver);
		a.dragAndDrop(src, des).perform();	
	}
	
	public static void doubleClick(WebElement element) {
		Actions a = new Actions (driver);
		a.doubleClick(element);
	}
	
	public static void contextClick(WebElement element) {
		Actions a = new Actions (driver);
		a.contextClick(element);
	}

	public static void alertAccpet() {
		Alert a = driver.switchTo().alert();
		a.accept();
	}
	
	public static void alertDismiss() {
		Alert a = driver.switchTo().alert();
		a.dismiss();
	}
	
	public static void alertgetText() {
		Alert a = driver.switchTo().alert();
		String text = a.getText();
		System.out.println(text);
	}
	
	public static void alertSendkeys(String keys) {
		Alert a = driver.switchTo().alert();
		a.sendKeys(keys);
	}
	
	public static void jsClick(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click", element);
	}
	
	public static void scrollUp(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(true)", element);
	}
	
	public static void scrollDown(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView(false)", element);
	}
	
	public static void jsSendkeys(WebElement element, String txt) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','+ txt +')", element);
	}
	
	public static void dropAndDown(WebElement element,int num) {
		Select s = new Select(element);
		s.selectByIndex(num);
	}
	
	public static void selectByValue(WebElement element,String value) {
		Select s = new Select(element);
		s.selectByValue(value);
	}
	
	public static void selectByVisbleText(WebElement element,String text) {
		Select s = new Select (element);
		s.selectByVisibleText(text);
	}
	
	public static void getOptions(WebElement element) {
		Select s = new Select(element);
		List<WebElement> options = s.getOptions();
		System.out.println(options);
		return;
	}
	
	public static void getAllSelectedOpitions(WebElement element) {
		Select s = new Select(element);
		List<WebElement> allSelectedOptions = s.getAllSelectedOptions();
		System.out.println(allSelectedOptions);
		return;
	}
	
	public static void getFirstSelectedOption(WebElement element) {
		Select s = new Select(element);
		WebElement firstSelectedOption = s.getFirstSelectedOption();
		System.out.println(firstSelectedOption);
		return;
	}
	
	public static void takeScreenShot(String filename) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File des = new File("C:\\Users\\S U R Y A\\eclipse-workspace\\seleniumpg\\Screenshots\\"+ filename+".png");
		FileUtils.copyFile(src, des);
	}
	
	public static String getCellValue(int num,int row,int cell) throws IOException {
		File f = new File("C:\\Users\\S U R Y A\\eclipse-workspace\\TestNG-Project\\Excel\\DataFM.xlsx");
		 FileInputStream fis = new FileInputStream(f);
		Workbook  w = new XSSFWorkbook(fis);
		Sheet s = w.getSheetAt(num);
		Row r = s.getRow(row);
		Cell c = r.getCell(cell);
		String s1 = c.toString();
		return s1;
	}
}
	
/*	public static void getWindowHandle() {
		String windowHandle = driver.getWindowHandle();
		System.out.println(windowHandle);
		return;
	}
	private void getWindowHandles(WebElement element) {
		Set<String> windowHandles = driver.getWindowHandles();
		for (WebElement k : windowHandles) {
			System.out.println(k.getText());
		}
	}
	public static void frames(String id) {
		driver.switchTo().frame(id);	
	}
*/