import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class echologyxSite {
      [x: string]: any;

      private page: Page;
      static login: any;
      static buffer: void;

      constructor(page: Page) {
            this.page = page;
      }

      async Clickcookie() {
        const ele = this.page.locator("(//a[@role='button'])[1]")
        expect(ele).toBeEnabled()
        await ele.click()
  }
      async ClickService() {
            const ele = this.page.locator("//li[@id='menu-item-1871']/a[1]")
            expect(ele).toBeEnabled()
            await ele.click()
      }
      async ClickPartner() {
        const ele = this.page.locator("//li[@id='menu-item-1870']/a[1]")
        expect(ele).toBeEnabled()
        await ele.click()
    }
        async Clickclient() {
            const ele = this.page.locator("//li[@id='menu-item-1869']/a[1]")
            expect(ele).toBeEnabled()
            await ele.click()
    }
        async ClickcBlog() {
            const ele = this.page.locator("//li[@id='menu-item-1867']/a[1]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickCarrer() {
            const ele = this.page.locator("//li[@id='menu-item-3436']/a[1]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickAbout_us() {
            const ele = this.page.locator("//li[@id='menu-item-1868']/a[1]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickContact() {
            const ele = this.page.locator("(//a[@data-toggle='modal'])[1]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async inputFirstName() {
            const locator = this.page.locator("input[name='firstname']")
            expect(locator).toBeVisible()
            await locator.fill("Mohammad")
        }
        async inputlastName() {
            const locator = this.page.locator("input[name='lastname']")
            expect(locator).toBeVisible()
            await locator.fill("Sohag")
        }
        async inputEmail() {
            const locator = this.page.locator("(//ul[@role='alert']//label)[2]")
            expect(locator).toBeVisible()
            await locator.fill("sohagbubtcse@gmail.com")
        }
        async inputPhonenumber() {
            const locator = this.page.locator("//input[@inputmode='tel']")
            expect(locator).toBeVisible()
            await locator.fill("Mohammad")
        }
        async inputjobtitle() {
            const locator = this.page.locator("(//input[@inputmode='text'])[3]")
            expect(locator).toBeVisible()
            await locator.fill("Software QA Engineer")
        }
        async inputCompanyName() {
            const locator = this.page.locator("input[name='company']")
            expect(locator).toBeVisible()
            await locator.fill("Echologyx Limited")
        }
        async inputMessage() {
            const locator = this.page.locator("textarea[name='message']")
            expect(locator).toBeVisible()
            await locator.fill("A/B Testing")
        }
        async ClickSubcribeCheckbox() {
            const ele = this.page.locator("//input[@type='checkbox']")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickHomepage() {
            const ele = this.page.locator("//img[@alt='EchoLogyx']")
            expect(ele).toBeEnabled()
            await ele.click()
        }



        //Clients section automation

        async ClickSephora() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[1]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }

        async ClickHealthAF() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[2]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickGostudent() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[3]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickBloom() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[4]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickGSF() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[5]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickmusicMag() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[6]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickFreddies() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[7]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickChinti() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[8]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickWax() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[9]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickDIOR() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[10]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickBerluti() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[11]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickFendi() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[12]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickFresh() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[13]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickUK_Drils() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[14]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickGolfzon() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[15]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickCurrentbody() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[16]")
            expect(ele).toBeEnabled()
            await ele.hover({ force: true })
        }
        async ClickLouis() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[17]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickRimowa() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[18]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickFentyBeauty() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[19]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickEspares() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[20]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickTag() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[21]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async Clickdecluttr() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[22]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickAcqua() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[23]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async Clickbuyspares() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[24]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickNinety() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[25]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickConnect() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[26]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async Clickessence() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[27]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickBinarry() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[28]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickREO() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[29]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickWebUsability() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[30]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickRaze() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[31]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async ClickAdaptive() {
            const ele = this.page.locator("(//div[@class='client-logo']//img)[32]")
            expect(ele).toBeEnabled()
            await ele.hover()
        }
        async Clickloadmore() {
            const ele = this.page.locator("//a[contains(text(),'Load More')]")
            expect(ele).toBeEnabled()
            await ele.click()
        }

         //Partners section automation

         async ClickKameleoon() {
            const ele = this.page.locator("(//a[@class='button-stroked'])[1]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickContert() {
            const ele = this.page.locator("(//a[@class='button-stroked'])[2]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickAdobe() {
            const ele = this.page.locator("(//a[@class='button-stroked'])[3]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickVwo() {
            const ele = this.page.locator("(//a[@class='button-stroked'])[4]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickOptimize() {
            const ele = this.page.locator("(//a[@class='button-stroked'])[5]")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async Clicklpagesence() {
            const ele = this.page.locator("(//a[@class='button-stroked'])[6]")
            expect(ele).toBeEnabled()
            await ele.click()
        }

        //Blog section automation

        async ClickAll() {
            const ele = this.page.locator("li[data-term_id='all']")
            expect(ele).toBeEnabled()
            await ele.click({ force: true })
        }
        async ClickABtestDev() {
            const ele = this.page.locator("li[data-term_id='14']")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickABTesting() {
            const ele = this.page.locator("li[data-term_id='12']")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickcaseStudy() {
            const ele = this.page.locator("li[data-term_id='67']")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickFullstackDev() {
            const ele = this.page.locator("li[data-term_id='15']")
            expect(ele).toBeEnabled()
            await ele.click()
        }
        async ClickQualityAssurance() {
            const ele = this.page.locator("li[data-term_id='13']")
            expect(ele).toBeEnabled()
            await ele.click()
        }

        //Service section automation

        async HeaderText() {
            const locator = this.page.locator("//div[@class='section-header']//h1[1]")
            expect(locator).toContainText('WHAT  WE DO')
        }
        async ABtestingDevText() {
            const locator = this.page.locator("//a[contains(text(),'A/B testing, development and QA')]")
            expect(locator).toContainText('A/B testing, development and QA')
        }
        async QualityAssuranceText() {
            const locator = this.page.locator("//a[contains(text(),'Quality Assurance')]")
            expect(locator).toContainText('Quality Assurance')
        }
        async UIdesignText() {
            const locator = this.page.locator("//a[contains(text(),'UI Design')]")
            expect(locator).toContainText('UI Design')
        }
        async ShopifyDevText() {
            const locator = this.page.locator("//a[contains(text(),'Shopify Development')]")
            expect(locator).toContainText('Shopify Development')
        }
        async magendoDevText() {
            const locator = this.page.locator("//a[contains(text(),'Magento Development')]")
            expect(locator).toContainText('Magento Development')
        }
        async WordpressDevText() {
            const locator = this.page.locator("//a[contains(text(),'WordPress Development')]")
            expect(locator).toContainText('WordPress Development')
        }
        async WebAppDevText() {
            const locator = this.page.locator("//a[contains(text(),'Web App Development')]")
            expect(locator).toContainText('Web App Development')
        }
        async AnalyticTagText() {
            const locator = this.page.locator("//a[contains(text(),'Analytics Tagging')]")
            expect(locator).toContainText('Analytics Tagging')
        }
        async MobileAppDevText() {
            const locator = this.page.locator("//a[contains(text(),'Mobile App Development')]")
            expect(locator).toContainText('Mobile App Development')
        }

    }