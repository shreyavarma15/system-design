const puppeteer = require("puppeteer");
//IIFE
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  });

  const page = await browser.newPage();
  await page.goto("https://namastedev.com/");

  console.log("Website launched");

  await page.setViewport({ width: 1080, height: 1024 });

  const coursesSelector = ".menu > li:nth-child(3)";
  await page.waitForSelector(coursesSelector);
  await page.click(coursesSelector);

  console.log("Courses clicked");

  const btnSelector = ".bg-success-btn";

  await page.waitForSelector(btnSelector);

  await page.click(btnSelector);

  console.log("System design clicked");

  const enrollSelector = ".darkEnroll";

  await page.waitForSelector(enrollSelector);

  await page.click(enrollSelector);

  console.log("Enroll button clicked");

  await browser.close();

  console.log("Browser closed");
})();
