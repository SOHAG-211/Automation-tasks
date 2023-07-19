import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";


test("Validate Luyamaya Kategorien", async ({ echoPage, functions, KickzSite, page }, testInfo) => {

    await page.goto("/")
    
      const screenshot = await page.screenshot();
      await testInfo.attach(" screenshot", {
            contentType: "image/png",
            body: screenshot
      })

      await KickzSite.Clickcookie1();
      await KickzSite.Clickcookie2();
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickOHRRINGE();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickHALSKETTEN();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickRINGE();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickARMBÄNDER();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickCHARMS();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickPIERCINGS();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickEARCUFFS();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickFUßKETTEN();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickZEHENRINGE();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clicSUNGLASSES();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickBODY();
      await page.waitForTimeout(3000);
      await KickzSite.clickKATEGORIEN();
      await KickzSite.clickHAARACCESSOIRES();
      await page.waitForTimeout(3000);

    })

    
test("Validate Luyamaya Kollectionen", async ({ echoPage, functions, KickzSite, page }, testInfo) => {

    await page.goto("/")
    
      const screenshot = await page.screenshot();
      await testInfo.attach(" screenshot", {
            contentType: "image/png",
            body: screenshot
      })

      await KickzSite.Clickcookie1();
      await KickzSite.Clickcookie2();
      await KickzSite.clickKollectionen();
      await KickzSite.clickBEACH();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickBUTTERFLY();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickBLOOMING();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickANGELNUMBERS();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickUNISEX();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickLOVEME();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickFESTIVE();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickSPARKLING();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickDELICATE();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickLOLA();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickHEAT();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickMUSE();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickDAYDREAMER();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickSHELL();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickLOLACOLLECTION();
      await page.waitForTimeout(3000);
      await KickzSite.clickKollectionen();
      await KickzSite.clickALLE();
      await page.waitForTimeout(3000);
      

    })

    test("Validate Luyamaya", async ({ echoPage, functions, KickzSite, page }, testInfo) => {

        await page.goto("/")
        
          const screenshot = await page.screenshot();
          await testInfo.attach(" screenshot", {
                contentType: "image/png",
                body: screenshot
          })
    
      await KickzSite.Clickcookie1();
      await KickzSite.Clickcookie2();
      await KickzSite.clickFAVORITES();
      await page.waitForTimeout(3000);
      await KickzSite.clicNEWIN();
      await page.waitForTimeout(3000);
      await KickzSite.clickBYTHEBEACH();
      await page.waitForTimeout(3000);
      await KickzSite.clickBLOOM();
      await page.waitForTimeout(3000);
      await KickzSite.clickGUTSCHEINE();
      await page.waitForTimeout(3000);


    })
    test.only("Validate Luyamaya order", async ({ echoPage, functions, KickzSite, page }, testInfo) => {

      await page.goto("/")
      
        const screenshot = await page.screenshot();
        await testInfo.attach(" screenshot", {
              contentType: "image/png",
              body: screenshot
        })
  
    await KickzSite.Clickcookie1();
    await KickzSite.Clickcookie2();
    await KickzSite.clickHomeorder();
    await page.waitForTimeout(3000);
    await KickzSite.clickProduct();
    await page.waitForTimeout(5000);
    await KickzSite.clickFarbe();
    await page.waitForTimeout(1000);
    await KickzSite.clickGold();
    await page.waitForTimeout(1000);
    await KickzSite.clickCharm1();
    await KickzSite.clickgoldpro1();
    await page.waitForTimeout(1000);
    await KickzSite.clickCharm2();
    await KickzSite.clickGoldpro3();
    await page.waitForTimeout(1000);
    await KickzSite.clickInden();
    await page.waitForTimeout(1000);
    await KickzSite.clickIncrease();
    await page.waitForTimeout(1000);
    await KickzSite.clickdecrease();
    await KickzSite.inputRabattcode();
    await KickzSite.clickZurKasse();
    await page.waitForTimeout(3000);

  })