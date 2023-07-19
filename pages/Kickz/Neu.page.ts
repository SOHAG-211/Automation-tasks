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
        const ele = this.page.locator("//button[@aria-label='Close form 3']")
        expect(ele).toBeEnabled()
        await ele.click()
      }
      async Clickcookie2() {
        const ele = this.page.locator("//button[@aria-label='Close form 2']")
        expect(ele).toBeEnabled()
        await ele.click()
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

    // Luyamaya ordering

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
    async clickZurKasse(){
      const ele = this.page.locator("//button[text()='Zur Kasse']")
      expect(ele).toBeEnabled()
      await ele.click({ force: true })
    }


}
