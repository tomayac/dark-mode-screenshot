#!/usr/bin/env node

const puppeteer = require('puppeteer');
const commandLineArgs = require('command-line-args');

(async () => {
  // Parse CLI arguments and set defaults.
  const optionDefinitions = [
    {name: 'url', alias: 'u', type: String, defaultValue:
        'https://googlechromelabs.github.io/dark-mode-toggle/demo/index.html'},
    {name: 'output', alias: 'o', type: String, defaultValue: 'screenshot'},
    {name: 'fullPage', alias: 'f', type: Boolean, defaultValue: true},
  ];
  const arguments = commandLineArgs(optionDefinitions);
  const {url, output, fullPage} = arguments;
  // TODO: Once https://github.com/GoogleChrome/puppeteer/issues/4752 is
  // resolved, make it run headless.
  let options = {headless: false};

  // Check that Dark Mode is on, else, this script can't work.
  let browser = await puppeteer.launch(options);
  let page = await browser.newPage();
  const darkModeOn = await page.evaluate(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  if (!darkModeOn) {
    console.error('Dark Mode needs to be on for this script to work.',
        'Please turn it on first.\n👉', 'https://goo.gle/activate-dark-mode');
    await browser.close();
    return;
  }
  await browser.close();
  console.log('✅ Dark Mode is on, ready to go…');

  // Create Light Mode screenshot
  options.args = [
    '--disable-blink-features=MediaQueryPrefersColorScheme'
  ];
  browser = await puppeteer.launch(options);
  page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: `${output}-light.png`, fullPage: fullPage});
  await browser.close();
  console.log('🌞 Created Light Mode screenshot.');

  // Create Dark Mode screenshot
  options.args = [
    '--force-dark-mode'
  ];
  browser = await puppeteer.launch(options);
  page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: `${output}-dark.png`, fullPage: fullPage});
  await browser.close();
  console.log('🌒️ Created Dark Mode screenshot.');
})();
