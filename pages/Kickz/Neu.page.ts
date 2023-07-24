import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class KickzSite {
      [x: string]: any;

      private page: Page;
      static login: any;
      static buffer: void;

      constructor(page: Page) {
            this.page = page;
      }
    //   Kategorien automation

      async Clickcookie1() {
        const ele = this.page.locator("//button[@aria-label='Close form 4']")
        expect(ele).toBeEnabled()
        await ele.click({ force: true })
      }
      async Clickcookie2() {
        const ele = this.page.locator("//button[@aria-label='Close form 3']")
        expect(ele).toBeEnabled()
        await ele.click({ force: true })
      }
      async clickKATEGORIEN(){
        const ele = this.page.locator("//span[text()='KATEGORIEN']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickOHRRINGE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='OHRRINGE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickHALSKETTEN(){
        const ele = this.page.locator("(//a[text()[normalize-space()='HALSKETTEN']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickRINGE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='RINGE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickARMBÄNDER(){
        const ele = this.page.locator("(//a[text()[normalize-space()='ARMBÄNDER']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickCHARMS(){
        const ele = this.page.locator("(//a[text()[normalize-space()='CHARMS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickPIERCINGS(){
        const ele = this.page.locator("(//a[text()[normalize-space()='PIERCINGS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickEARCUFFS(){
        const ele = this.page.locator("(//a[text()[normalize-space()='EAR CUFFS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickFUßKETTEN(){
        const ele = this.page.locator("(//a[text()[normalize-space()='FUßKETTEN']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickZEHENRINGE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='ZEHENRINGE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clicSUNGLASSES(){
        const ele = this.page.locator("(//a[text()[normalize-space()='SUNGLASSES CHAINS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickBODY(){
        const ele = this.page.locator("(//a[text()[normalize-space()='BODY CHAINS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async clickHAARACCESSOIRES(){
        const ele = this.page.locator("(//a[text()[normalize-space()='HAAR-ACCESSOIRES']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
      }

    //   Kollectionen automation

    async clickKollectionen(){
        const ele = this.page.locator("//details[@id='Details-HeaderMenu-3']/summary[1]/span[1]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickBEACH(){
        const ele = this.page.locator("(//a[text()[normalize-space()='BY THE BEACH']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickBUTTERFLY(){
        const ele = this.page.locator("(//a[text()[normalize-space()='BUTTERFLY']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickBLOOMING(){
        const ele = this.page.locator("(//a[text()[normalize-space()='BLOOMING']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickANGELNUMBERS(){
        const ele = this.page.locator("(//a[text()[normalize-space()='ANGEL NUMBERS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickUNISEX(){
        const ele = this.page.locator("(//a[text()[normalize-space()='UNISEX']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickLOVEME(){
        const ele = this.page.locator("(//a[text()[normalize-space()='LOVE ME TO INFINITY']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickFESTIVE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='FESTIVE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickSPARKLING(){
        const ele = this.page.locator("(//a[text()[normalize-space()='SPARKLING EAR CANDY']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickDELICATE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='DELICATE RINGS']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickLOLA(){
        const ele = this.page.locator("(//a[text()[normalize-space()='LOLA SUNSHINE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickHEAT(){
        const ele = this.page.locator("(//a[text()[normalize-space()='HEAT WAVE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickMUSE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='MUSE']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickDAYDREAMER(){
        const ele = this.page.locator("(//a[text()[normalize-space()='DAYDREAMER']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickSHELL(){
        const ele = this.page.locator("(//a[text()[normalize-space()='SHELL PEARL']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickLOLACOLLECTION(){
        const ele = this.page.locator("(//a[text()[normalize-space()='LOLA COLLECTION']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickALLE(){
        const ele = this.page.locator("(//a[text()[normalize-space()='ALLE KOLLEKTIONEN']])[2]")
        expect(ele).toBeEnabled()
        await ele.click()
    }

    // Luyamaya Homepage Elements automation

    async clickFAVORITES(){
        const ele = this.page.locator("(//span[text()='FAVORITES'])[1]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clicNEWIN(){
        const ele = this.page.locator("(//span[text()='NEW IN'])[1]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickBYTHEBEACH(){
        const ele = this.page.locator("//span[text()='BY THE BEACH COLLECTION']")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickBLOOM(){
        const ele = this.page.locator("//span[text()='BLOOMING COLLECTION']")
        expect(ele).toBeEnabled()
        await ele.click()
    }
    async clickGUTSCHEINE(){
        const ele = this.page.locator("//span[text()='GUTSCHEINE']")
        expect(ele).toBeEnabled()
        await ele.click()
    }

    // Luyamaya order complete

    async clickHomeorder(){
      const ele = this.page.locator("//span[text()='HOME']")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickProduct(){
      const ele = this.page.locator("(//a[@class='full-unstyled-link'])[2]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickFarbe(){
      const ele = this.page.locator("(//input[@class='select-field'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickGold(){
      const ele = this.page.locator("//div[text()='Gold ']")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickCharm1(){
      const ele = this.page.locator("(//input[@class='select-field'])[2]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickgoldpro1(){
      const ele = this.page.locator("(//div[text()='About Liberty (Gold)'])[2]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickCharm2(){
      const ele = this.page.locator("(//input[@class='select-field'])[3]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickGoldpro3(){
      const ele = this.page.locator("(//div[text()='All-seeing eye (Gold)'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickInden(){
      const ele = this.page.locator("(//button[@type='submit'])[2]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickIncrease(){
      const ele = this.page.locator("(//button[@type='button'])[3]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickdecrease(){
      const ele = this.page.locator("(//button[@type='button'])[2]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async inputRabattcode() {
      const locator = this.page.locator("input[name='code']")
      expect(locator).toBeVisible()
      await locator.fill("THANKS-Z8PDZBF")
    }
    async clickclosespan(){
      const ele = this.page.locator("//span[@class='cancel-span']")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickZurKasse(){
      const ele = this.page.locator("//button[@class='cart__checkout-button button']")
      expect(ele).toBeEnabled()
      // await ele.click()
      await ele.click({ force: true })
    }
    async inputEmail() {
      const locator = this.page.locator("//label[@for='checkout_email']")
      expect(locator).toBeVisible()
      await locator.fill("abc@gmail.com")
    }
    async clickSubscription(){
      const ele = this.page.locator("//input[@type='checkbox']")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async inputFirstname() {
      const locator = this.page.locator("//input[@data-backup='first_name']")
      expect(locator).toBeVisible()
      await locator.fill("Mohammad")
    }
    async inputLastname() {
      const locator = this.page.locator("//input[@data-backup='last_name']")
      expect(locator).toBeVisible()
      await locator.fill("Sohag")
    }
    async inputAddress() {
      const locator = this.page.locator("(//input[@name='checkout[shipping_address][address1]'])[2]")
      expect(locator).toBeVisible()
      await locator.fill("Muradpur")
    }
    async inputDivision() {
      const locator = this.page.locator("//input[@data-backup='address2']")
      expect(locator).toBeVisible()
      await locator.fill("Chattogram")
    }
    async inputCity() {
      const locator = this.page.locator("//input[@data-backup='city']")
      expect(locator).toBeVisible()
      await locator.fill("Chattogram")
    }
    async inputPostcode() {
      const locator = this.page.locator("input[placeholder='Postleitzahl']")
      expect(locator).toBeVisible()
      await locator.fill("3535")
    }
    async clickWeiterzum(){
      const ele = this.page.locator("button[name='button']")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickWeiterzur(){
      const ele = this.page.locator("(//button[@type='submit'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickKaufen(){
      const ele = this.page.locator("(//button[@name='button'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }

    // Luyamaya filter section Automation
    // Availability

    async clickAvalabilitydropdown(){
      const ele = this.page.locator("(//span[text()='Verfügbarkeit'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickAbltycheckbox1(){
      const ele = this.page.locator("(//input[@type='checkbox'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickClosecheckbox1(){
      const ele = this.page.locator("(//a[@role='button']//span)[2]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }

    // Price

    async clickPricedropdown(){
      const ele = this.page.locator("(//span[text()='Preis'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async InputPricerange(){
      const locator = this.page.locator("(//input[@max='4290'])[1]")
      expect(locator).toBeVisible()
      await locator.fill("3")
    }
    async clickClosepricecheckbox1(){
      const ele = this.page.locator("(//a[@role='button']//span)[2]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }

    // Product type

    async clickProducttype(){
      const ele = this.page.locator("(//span[text()='Produkttyp'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickprodctcheckbox2(){
      const ele = this.page.locator("(//input[@id='Filter-Produkttyp-2'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickCloseproducttype2(){
      const ele = this.page.locator("(//a[@role='button']//span)[2]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }

    // Select

    async clickSelect(){
      const ele = this.page.locator("(//select[@name='sort_by'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickforchoose(){
      const ele = this.page.locator("(//select[@name='sort_by'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }

    // Grobe

    async clickGrobe(){
      const ele = this.page.locator("(//span[text()='Größe'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickGrobeCK1(){
      const ele = this.page.locator("(//input[@value='Small'])[1]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }
    async clickcloseGroberesult(){
      const ele = this.page.locator("(//span[contains(@class,'active-facets__button-inner button')])[2]")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }

    // Searching product and add to the cart

    async clicksearch(){
      const ele = this.page.locator("(//summary[@role='button']//span)[2]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickSearch1(){
      const ele = this.page.locator("(//button[@aria-label='Suchen'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickclosesrch(){
      const ele = this.page.locator("(//button[contains(@class,'modal__close-button link')])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async inputSearchingdata() {
      const locator = this.page.locator("(//input[@name='q'])[1]")
      expect(locator).toBeVisible()
      await locator.fill("Gold ring")
    }
    async clickAddwishlist1(){
      const ele = this.page.locator("(//div[@class='heart-background'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickAddwishlist3(){
      const ele = this.page.locator("(//div[@class='heart-background'])[3]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickwishlistbtn(){
      const ele = this.page.locator("#wish-icon-bubble")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickDeletewishlist1(){
      const ele = this.page.locator("(//span[@class='delete-icon'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickDeletewishlist3(){
      const ele = this.page.locator("(//span[@class='delete-icon'])[1]")
      expect(ele).toBeEnabled()
      await ele.click()
    }
    async clickgoldring(){
      const ele = this.page.locator("//h3[@id='title--4592924524617']")
      expect(ele).toBeEnabled()
      await ele.click()
    }


}
