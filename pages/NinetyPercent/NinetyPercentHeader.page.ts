import { expect, Page } from "@playwright/test";

export default class Ninetypercent {
      [x: string]: any;

      private page: Page;
      static login: any;
      static buffer: void;

      constructor(page: Page) {
            this.page = page;
      }
  // Homepage Automation

      async ClickAcceptcookie1() {
        const ele = this.page.locator("//button[text()='accept all cookies']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickNewInBtn() {
        const ele = this.page.locator("(//a[text()[normalize-space()='New In']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickShopBtn() {
        const ele = this.page.locator("(//a[text()[normalize-space()='SHOP']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickOurWayBtn() {
        const ele = this.page.locator("(//a[contains(@class,'site-nav__link site-nav__link--underline')])[3]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickSaleBtn() {
        const ele = this.page.locator("(//a[text()[normalize-space()='SALE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickNPHomeBtn() {
        const ele = this.page.locator("(//img[@alt='Ninety Percent'])[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickLoginBtn() {
        const ele = this.page.locator("(//span[text()='Login'])[3]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async CliclogincloseBtn() {
        const ele = this.page.locator("//div[@class='login-section-close']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickSearchBtn() {
        const ele = this.page.locator("(//a[@id='drawer-search-icon'])[3]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickCartBtn() {
        const ele = this.page.locator("(//span[@class='cart-link'])[3]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickclosecartBtn() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }

      // Shop section
      // hIGHLIGHTS

      async ClickSunnerSale() {
        const ele = this.page.locator("//a[contains(text(),'Summer Sale')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickHolidayEdits() {
        const ele = this.page.locator("(//a[contains(@class,'site-nav__dropdown-link np-h6')])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClicksoftTailoring() {
        const ele = this.page.locator("//a[contains(text(),'SOFT TAILORING')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Clickeveningdressing() {
        const ele = this.page.locator("//a[contains(text(),'EVENING DRESSING')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickGiftcards() {
        const ele = this.page.locator("//a[contains(text(),'GIFT CARDS')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }

      // READY TO WEAR

      async ClickNewin() {
        const ele = this.page.locator("(//a[text()[normalize-space()='New In']])[3]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickTops() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickShirtBlouses() {
        const ele = this.page.locator("//a[contains(text(),'SHIRTS AND BLOUSES')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Clickdresses() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickSkirts() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickTrousers() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickSweaters() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickKnitqwear() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickShopAll() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }

      // COLLECTIONS

      async ClickPrefall() {
        const ele = this.page.locator("//div[@class='drawer__close']//button[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickPerennial() {
        const ele = this.page.locator("//a[contains(text(),'PERENNIAL WARDROBE')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }

      // Gift card checkout

      async Click100Eu() {
        const ele = this.page.locator("//label[text()=' £100 ']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Click150Eu() {
        const ele = this.page.locator("//label[text()=' £150 ']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Click200Eu() {
        const ele = this.page.locator("//label[text()=' £200 ']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Click300Eu() {
        const ele = this.page.locator("//label[text()=' £300 ']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Click500Eu() {
        const ele = this.page.locator("//label[text()=' £500 ']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickAddtoBag() {
        const ele = this.page.locator("(//button[contains(@class,'btn btn--full')])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickTerms() {
        const ele = this.page.locator("//a[contains(text(),'→ Terms & Conditions')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickCloseterms() {
        const ele = this.page.locator("(//div[@class='pdp-drawer-close'])[3]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Clickgiftincrease() {
        const ele = this.page.locator("//button[@aria-label='Increase item quantity by one']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Clickgiftdecrease() {
        const ele = this.page.locator("//button[@class='js-qty__adjust js-qty__adjust--minus']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickCheckout() {
        const ele = this.page.locator("//button[contains(@class,'btn cart__checkout')]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async inputEmail() {
        const locator = this.page.locator("//input[@placeholder='Email']")
        expect(locator).toBeVisible()
        await locator.fill("abc@gmail.com")
      }
      async clickSubscription(){
        const ele = this.page.locator("//input[@type='checkbox']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async ClickBillingaddress() {
        const locator = this.page.selectOption("//div[@class='j2JE7']//select[1]", { value: "Bangladesh" })
        
      }
      async inputFirstname() {
        const locator = this.page.locator("(//input[@name='firstName'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("Mohammad")
      }
      async inputLastname() {
        const locator = this.page.locator("(//input[@name='lastName'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("Sohag")
      }
      async inputCompanyname() {
        const locator = this.page.locator("(//input[@name='company'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("Echologyx Ltd")
      }
      async inputAddress() {
        const locator = this.page.locator("(//input[@name='address1'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("Chattogram")
      }
      async inputApartment() {
        const locator = this.page.locator("(//input[@name='address2'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("Ch/24")
      }
      async inputCity() {
        const locator = this.page.locator("(//input[@name='city'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("Yelvertoft Ward")
      }
      async inputpostcode() {
        const locator = this.page.locator("(//input[@name='postalCode'])[1]")
        expect(locator).toBeVisible()
        await locator.fill("CV23 0AE")
      }
      async inputPhonenumber() {
        const locator = this.page.locator("//input[@placeholder='Phone']")
        expect(locator).toBeVisible()
        await locator.fill("01677997319")
      }
      async clickPayment(){
        const ele = this.page.locator("(//button[@type='submit'])[1]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
  

    }