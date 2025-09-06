
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

class RegisterUITest {
    WebDriver browser;

    @BeforeEach
    void beforeEach() {
        var options = new FirefoxOptions();
        options.addArguments("--safe-mode");
        options.setCapability("webSocketUrl", true);
        browser = new FirefoxDriver(options);
    }

    @Test
   @Test
void googleTest() throws InterruptedException {
    browser.get("http://localhost:3000/Register");

    // Fill out the form (your existing code)
    var firstnameBox = browser.findElement(By.cssSelector("input[placeholder='Enter Your Username']"));
    firstnameBox.sendKeys("arune");
    
    var phonenumberBox = browser.findElement(By.cssSelector("input[placeholder='Enter your phone number']"));
    phonenumberBox.sendKeys("076213123");
    
    var passwordBox = browser.findElement(By.cssSelector("input[placeholder='Enter your Password']"));
    passwordBox.sendKeys("1234");
    
    var cpasswordBox = browser.findElement(By.cssSelector("input[placeholder='Confirm Password']"));
    cpasswordBox.sendKeys("1234");
    Thread.sleep(1000);
    
    var nicBox = browser.findElement(By.cssSelector("input[placeholder='NIC number']"));
    nicBox.sendKeys("123434242");
    
    WebElement checkbox = browser.findElement(By.cssSelector("input[type='checkbox']"));
    if (!checkbox.isSelected()) {
        checkbox.click();
    }
    
    // Click register button
    browser.findElement(By.cssSelector("button.Register_btn")).click();
    
    // ADD ASSERTIONS HERE:
    Thread.sleep(2000); // Wait for redirect
    
    // Verify we were redirected to a success page or login page
    assertTrue(browser.getCurrentUrl().contains("success") || 
               browser.getCurrentUrl().contains("login") ||
               browser.getCurrentUrl().contains("home"));
    
    // OR verify a success message is displayed
    WebElement successMessage = browser.findElement(By.cssSelector(".success-message, .alert-success"));
    assertTrue(successMessage.isDisplayed());
    assertTrue(successMessage.getText().contains("success") || 
               successMessage.getText().contains("registered"));
}
        browser.findElement(By.cssSelector("button.Register_btn")).click();

//        browser.get("https://demoqa.com/buttons");
//        browser.findElement(By.xpath("//button[text()='Click Me']")).click();
//        var textt=browser.findElement(By.id("dynamicClickMessage")).getText();
//        System.out.println(textt);
//        assertEquals("dynamicClickMessage", textt);
    }

    @AfterEach
    void afterEach() {
//        browser.close();
    }
}
