import { Locator, Page } from '@playwright/test';

export default class HomePage {
  private page: Page;

  private divideButton: Locator;
  private multiplyButton: Locator;
  private subtractButton: Locator;
  private addButton: Locator;
  private calculateButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.divideButton = page.locator('[name="divide"]');
    this.multiplyButton = page.locator('[name="multiply"]');
    this.subtractButton = page.locator('[name="subtract"]');
    this.addButton = page.locator('[name="add"]');
    this.calculateButton = page.locator('[name="calculate"]');
  }

  getResultFieldValue() {
    return this.page.$eval("#display", el => el.value);
  }

  async clickNum(value: number) {
    await this.page.locator(`.button.number[value="${value}"]`).click();
  }

  async clickDivideButton() {
    await this.divideButton.click();
  }

  async clickMultiplyButton() {
    await this.multiplyButton.click();
  }

  async clickSubtractButton() {
    await this.subtractButton.click();
  }

  async clickAddButton() {
    await this.addButton.click();
  }

  async clickCalculateButton() {
    await this.calculateButton.click();
  }
}
