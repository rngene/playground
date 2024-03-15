import { test, expect } from '@playwright/test';

test.describe('custom link', () => {
    test('click 1', async ({ page }) => {
        await page.goto('/');

        await page.getByTestId("customlink1").click();

        await page.waitForURL("https://github.com");

    });

    test('click 2', async ({ page }) => {
        await page.goto('/');

        await page.getByTestId("customlink2").click();

        await page.waitForURL("https://github.com");

    });    


});