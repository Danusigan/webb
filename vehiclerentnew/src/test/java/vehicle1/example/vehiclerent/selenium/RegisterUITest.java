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
    void googleTest() throws InterruptedException {
        browser.get("http://localhost:3001/Register");


        var firstnameBox=browser.findElement(By.cssSelector("input[placeholder='Enter Your Username']"));
        firstnameBox.sendKeys("arune");


        var phonenumberBox=browser.findElement(By.cssSelector("input[placeholder='Enter your phone number']"));
        phonenumberBox.sendKeys("076213123");

        var passwordBox=browser.findElement(By.cssSelector("input[placeholder='Enter your Password']"));
        passwordBox.sendKeys("1234");

        var cpasswordBox=browser.findElement(By.cssSelector("input[placeholder='Confirm Password"));
        cpasswordBox.sendKeys("1234");
        Thread.sleep(1000);

        var nicBox=browser.findElement(By.cssSelector("input[placeholder='NIC number"));
        nicBox.sendKeys("123434242");

        WebElement checkbox = browser.findElement(By.cssSelector("input[type='checkbox']"));
        if (!checkbox.isSelected()) {  // Check if the checkbox is not already checked
            checkbox.click();  // Click to tick it
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
