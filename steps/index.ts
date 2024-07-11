import { expect } from "@playwright/test";
import { Given, When, Then } from "./fixtures";
//Prodution code, just needs to be compiled to js and put in the dist folder
import { fullNameFormatter } from "../src/dataFormatter"

Given("I am on Playwright home page", async ({ page }) => {
  await page.goto("https://playwright.dev");
});

When("I click link {string}", async ({ page }, name: string) => {
  await page.getByRole("link", { name }).click();
});

Then("I see in title {string}", async ({ page }, text: string) => {
  await expect(page).toHaveTitle(new RegExp(text));
});


let fullName: string | null = null;

// 1. Missing step definition for "features\dataFormatter.feature:4:9"
Given('User enter full name as {string}', async ({}, arg: string) => {
  fullName = arg;
});

// 2. Missing step definition for "features\dataFormatter.feature:5:9"
When('full name is verified', async ({}) => {
  fullName = fullNameFormatter(fullName);
});

// 3. Missing step definition for "features\dataFormatter.feature:6:9"
Then('a properly formatted string is returned as {string}', async ({}, arg: string) => {
  expect(fullName).toBe(arg);
});
