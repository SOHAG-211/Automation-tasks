import { devices, PlaywrightTestConfig } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {

    


    workers: 1,
    fullyParallel: !true,
    // projects: [
        // {
        //     name: 'chromium',
        //     use: { ...devices['Desktop Chrome'] },
 
        // },
        // {
        //     name: 'Pixel',
        //     use: { ...devices['Pixel 5'] },
        // },
    //     // {
    //     //     name: 'firefox',
    //     //     use: { ...devices['Desktop Firefox'] },
    //     // },
    //     {
    //         name: 'webkit',
    //         use: { ...devices['Desktop Safari'] },
    //     },
    
    // ],
    // globalSetup: require.resolve('./global-setup'),
    use: {
        actionTimeout: 10 * 5000,
        navigationTimeout: 30 * 6000,
        // Tell all tests to load signed-in state from 'storageState.json'.
        // storageState: 'storageState.json',
        viewport: null,
        headless: false,
        browserName: "chromium",
        screenshot: "off",
        video: "off",
        trace: "on",
        // baseURL: "https://qa-2.testingdxp.com/",

        // permissions: ["camera"]

        

        // baseURL: "https://echologyx.com/",
        // baseURL: "https://www.shohoz.com/",
        // baseURL: "https://www.luamaya.com/",
        baseURL: "https://ninetypercent.com/",

        // extraHTTPHeaders: {
        //     "Authorization": "Basic YWRtaW46U0NxN2pDb2tDbFI4"
        // }
        // baseURL: "",
        // contextOptions: {
        //     permissions: ["clipboard-read"]
        // }
        // ,
        // contextOptions: {
        //         permissions: ["clipboard-read"]
        //     },

        launchOptions: {
            args: ["--start-maximized"],
        },
        
        // permissions: ["camera"],
        permissions: ["microphone","camera"],

            // logger: {
            //     isEnabled: (name, severity) => true,
            //     log: (name, severity, message, args) => console.log(name, severity)
            // }
        
    },
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
     },
    
    timeout: 1000000,
   

    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    
    /* Opt out of parallel tests on CI. */
    // workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    testMatch: [
                // "011AddNewExperience.test.ts",
                // "mobilePreview.test.ts",
                // "012AUpdateecho.test.ts",
                // "Echoltd.test.ts",
                // "Echosite.test.ts",
                // "Neu.test.ts",
                "NinetyHeader.test.ts"
                
            
                
               
                ],
    retries: 0,
    // reporter: "./customReport/myReporter.ts", 
    reporter: [
        ["./customReport/myReporter.ts"],
        ["list"], // -> console
        ["json", { outputFile: "test-result.json" }], //  -> JSON
        ['html', {
            open: "never"
        }] // -> HTML
    ],
    globalTeardown: './helper/globalsetup.ts'

 /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },

  
  
}


export default config;