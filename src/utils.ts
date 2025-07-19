import puppeteer, { Page } from "puppeteer";

let page: Page | null = null;

export const getPage = async () => {
  if (page) return page;

  const browser = await puppeteer.launch({
    headless: true,
  });

  page = await browser.newPage();

  return page;
};
