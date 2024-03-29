#!/usr/bin/env node

const puppeteer = require('puppeteer');
const commandLineArgs = require('command-line-args');

(async () => {
  // Parse CLI arguments and set defaults.
  const optionDefinitions = [
    {name: 'url', alias: 'u', type: String, defaultValue:
        'https://googlechromelabs.github.io/dark-mode-toggle/demo/'},
    {name: 'output', alias: 'o', type: String, defaultValue: 'screenshot'},
    {name: 'fullPage', alias: 'f', type: Boolean},
    {name: 'pause', alias: 'p', type: Number, defaultValue: 0},
  ];
  const arguments = commandLineArgs(optionDefinitions);
  const {url, output, fullPage, pause} = arguments;

  // Optionally, wait to take the next screenshot. This can be useful for
  // web pages that use a CSS transition.
  const wait = async () => {
    if (pause) {
      console.log(`⏳ Waiting ${pause}ms…`);
      await new Promise(resolve => setTimeout(resolve, pause));
    }
  };

  const browser = await puppeteer.launch({
    // The macOS firewall might complain, see
    // https://github.com/GoogleChrome/puppeteer/issues/4752.
    headless: 'new',
  });
  const page = await browser.newPage();
  await page.goto(url);

  // Create Light Mode screenshot
  await page.emulateMediaFeatures([{
    name: 'prefers-color-scheme', value: 'light' }]);
  await wait(); // Wait, in case the system preference was dark mode.
  await page.screenshot({path: `${output}-light.png`, fullPage: fullPage});
  console.log('🌞 Created Light Mode screenshot.');

  // Create Dark Mode screenshot
  await page.emulateMediaFeatures([{
    name: 'prefers-color-scheme', value: 'dark' }]);
  await wait();
  await page.screenshot({path: `${output}-dark.png`, fullPage: fullPage});
  await browser.close();
  console.log('🌒️ Created Dark Mode screenshot.');
})();
