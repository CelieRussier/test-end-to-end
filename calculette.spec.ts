const { test, expect } = require("@playwright/test");
import { firefox } from "playwright-core";

test("Able to calculate 1 + 1", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr");
  const browser = await firefox.launch({
          headless: false
        });
    const context = await browser.newContext();
await page.getByRole('button', { name: '1' }).click();
await page.getByRole('button', { name: 'Plus' }).click();
await page.getByRole('button', { name: '1' }).click();
await page.getByRole('group', { name: 'clavier' }).getByRole('button', { name: 'Entrée' }).click();

// ---------------------
await context.close();
await page.pause();
});
