import test, { expect } from "@fixtures/basePages";

test("Validate NinetyPercent Homepage", async ({ Ninetypercent, page }, testInfo) => {

    await page.goto("/")
    
      const screenshot = await page.screenshot();
      await testInfo.attach(" screenshot", {
            contentType: "image/png",
            body: screenshot
      })

      // await Ninetypercent.ClickAcceptcookie1();
      // await page.waitForTimeout(3000);
      await Ninetypercent.ClickNewInBtn();
      await page.waitForTimeout(2000);
      await Ninetypercent.ClickShopBtn();
      await page.waitForTimeout(1000);
      await Ninetypercent.ClickOurWayBtn();
      await page.waitForTimeout(1000);
      await Ninetypercent.ClickSaleBtn();
      await page.waitForTimeout(3000);
      await Ninetypercent.ClickNPHomeBtn();
      await page.waitForTimeout(3000);
      await Ninetypercent.ClickLoginBtn();
      await page.waitForTimeout(1000);
      await Ninetypercent.CliclogincloseBtn();
      await Ninetypercent.ClickSearchBtn();
      await page.waitForTimeout(1000);
      await Ninetypercent.ClickSearchBtn();
      await Ninetypercent.ClickCartBtn();
      await page.waitForTimeout(1000);
      await Ninetypercent.ClickclosecartBtn();
    })

test("Validate NinetyPercent Shop section", async ({ Ninetypercent, page }, testInfo) => {

      await page.goto("/")
      
        const screenshot = await page.screenshot();
        await testInfo.attach(" screenshot", {
              contentType: "image/png",
              body: screenshot
        })
  
        // await Ninetypercent.ClickAcceptcookie1();
        // HIGHLIGHTS
        
        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.ClickSunnerSale();
        await page.waitForTimeout(2000);
        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.ClickHolidayEdits();
        await page.waitForTimeout(2000);
        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.ClicksoftTailoring();
        await page.waitForTimeout(2000);
        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.Clickeveningdressing();
        await page.waitForTimeout(2000);
        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.ClickGiftcards();
        await page.waitForTimeout(2000);

      //   READY TO WEAR

        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.ClickNewin();
        await page.waitForTimeout(2000);
        await Ninetypercent.ClickShirtBlouses();
        await page.waitForTimeout(2000);
      //   await Ninetypercent.ClickShopBtn();
        // await Ninetypercent.ClickCartBtn();
        // await page.waitForTimeout(1000);
        // await Ninetypercent.ClickclosecartBtn();

      //   COLLECTIONS
        await Ninetypercent.ClickShopBtn();
        await Ninetypercent.ClickPerennial();
        await page.waitForTimeout(2000);


      })

test.only("Validate Gift card checkout", async ({ Ninetypercent, page }, testInfo) => {

            await page.goto("/")
            
              const screenshot = await page.screenshot();
              await testInfo.attach(" screenshot", {
                    contentType: "image/png",
                    body: screenshot
              })
        
              // await Ninetypercent.ClickAcceptcookie1();
              // HIGHLIGHTS
              
              
              await Ninetypercent.ClickShopBtn();
              await Ninetypercent.ClickGiftcards();
              await page.waitForTimeout(2000);
              await Ninetypercent.Click100Eu();
              await page.waitForTimeout(1000);
              await Ninetypercent.Click150Eu();
              await page.waitForTimeout(1000);
              await Ninetypercent.Click200Eu();
              await page.waitForTimeout(1000);
              await Ninetypercent.Click300Eu();
              await page.waitForTimeout(1000);   
              await Ninetypercent.Click500Eu();
              await page.waitForTimeout(1000);
              await Ninetypercent.ClickTerms();
              await page.waitForTimeout(1000);
              await Ninetypercent.ClickCloseterms();
              await page.waitForTimeout(1000);
              await Ninetypercent.ClickAddtoBag();
              await page.waitForTimeout(3000);
              await Ninetypercent.Clickgiftincrease();
              await page.waitForTimeout(1000);
              await Ninetypercent.Clickgiftdecrease();
              await page.waitForTimeout(1000);
              await Ninetypercent.ClickCheckout();
              await page.waitForTimeout(2000);
              await Ninetypercent.inputEmail();
              await page.waitForTimeout(1000);
              await Ninetypercent.clickSubscription();
              await page.waitForTimeout(1000);
            //   await Ninetypercent.ClickBillingaddress();
            //   await page.waitForTimeout(1000);
              await Ninetypercent.inputFirstname();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputLastname();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputCompanyname();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputAddress();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputApartment();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputCity();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputpostcode();
              await page.waitForTimeout(1000);
              await Ninetypercent.inputPhonenumber();
              await page.waitForTimeout(1000);
              await Ninetypercent.clickPayment();
              await page.waitForTimeout(3000);

            }) 