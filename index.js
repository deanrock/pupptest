const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///Users/dean/projects/puppeteer-test/lala.html');
  await page.screenshot({ path: 'example.png' });

  await page.goto('https://example.com');
  await page.screenshot({ path: 'example2.png' });

  await browser.close();
})();
