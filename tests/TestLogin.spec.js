// @ts-check

const { test, expect } = require('@playwright/test');

test('Verify login page', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
    //test login
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button').click();
    await page.waitForTimeout(10000);
});