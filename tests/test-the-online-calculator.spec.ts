import { test, expect } from '@playwright/test';
import HomePage from '../src/pages/HomePage';

/**
 * TO avoid duplication test cases methods suite can be optimized by defining parametrized test
 * to do that function:
 * await homePage.clickDivideButton();
 * need to be parametrized
 * 
 * Please check https://playwright.dev/docs/test-parameterize for more details
 */
test.describe('Testing online calculator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.theonlinecalculator.com/');
  });

  test('check divide operation', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickNum(2);
    await homePage.clickDivideButton();
    await homePage.clickNum(2);
    await homePage.clickCalculateButton();
    expect(await homePage.getGesultField()).toHaveValue('1');
  });

  test('check multiply operation', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickNum(2);
    await homePage.clickMultiplyButton();
    await homePage.clickNum(2);
    await homePage.clickCalculateButton();
    expect(await homePage.getGesultField()).toHaveValue('4');
  });

  test('check subtract operation', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickNum(2);
    await homePage.clickSubtractButton();
    await homePage.clickNum(2);
    await homePage.clickCalculateButton();
    expect(await homePage.getGesultField()).toHaveValue('0');
  });

  test('check add operation', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickNum(2);
    await homePage.clickAddButton();
    await homePage.clickNum(2);
    await homePage.clickCalculateButton();
    expect(await homePage.getGesultField()).toHaveValue('4');
  });

  test('check divide on 0 operation', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickNum(2);
    await homePage.clickDivideButton();
    await homePage.clickNum(0);
    await homePage.clickCalculateButton();
    expect(await homePage.getGesultField()).toHaveValue('Not a Number');
  });
});
