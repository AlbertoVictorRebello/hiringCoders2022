const assert = require('assert');
const { Given, When, Then } = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const { Builder, By, Key, until } = require('selenium-webdriver');

const geckoDriverPath = "/alber/Documents/PROJETOS DE COMPUTACAO/hiringCoders2022/qualityAssuranceProject/tdd_bdd_jasmine_cucumber/driver/chromedriver.exe"
const serviceBuilder = new ServiceBuilder(geckoDriverPath);

const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build();
Given('I have {string} clients in my database', function (string) {  
    console.log("Records inserted into database");   
});

When('I access the home webpage', async function () {
    await driver.get('http://localhost:3000/'); // URL used only to simulate a real case. Replace for the project's one.
    await driver.sleep(1000);
});

Then('show a list with the {string} clients', async function (string) {
    let qtd = await driver.findElements(By.css('tbody tr'));
assert.equal(qtd.length, parseInt(string));
await driver.quit();
});