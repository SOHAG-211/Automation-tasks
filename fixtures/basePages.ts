import { test as baseTest } from "@playwright/test";
import functions from "@testData/func";
import addnewexperiencePage from "@pages/AddNewexperiences.page";
import echoPage from "@pages/Echologyxldt.page";
import echoPageMob from "@pages/MobEchologyxltd.page";
import echologyxSite from "@pages/Echosite.page";
import KickzSite from "@pages/Neu.page";





const test = baseTest.extend<{
    functions: functions;
    addnewexperiencePage: addnewexperiencePage;
    echoPage: echoPage;
    echoPageMob: echoPageMob;
    echologyxSite: echologyxSite;
    KickzSite: KickzSite;


}>({
    
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    
    addnewexperiencePage: async ({ page }, use) => {
        await use(new addnewexperiencePage(page));
     },

     echoPage: async ({ page, isMobile }, use) => {
        await use(new echoPage(page, isMobile));
     },
     echoPageMob: async ({ page, isMobile }, use) => {
        await use(new echoPageMob(page, isMobile));
     },
     echologyxSite: async ({ page }, use) => {
        await use(new echologyxSite(page));
     },
     KickzSite: async ({ page }, use) => {
      await use(new KickzSite(page));
   },
     
    
    
    
})
export default test;
export const expect = test.expect;

// var a;
// var b: string;

// type pages=  {
//     loginPage: LoginPage;
//     headerPage: HeaderPage;
//     commonPage: CommonFunctions;
// }
