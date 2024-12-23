import puppeteer from 'puppeteer';
import fs from 'fs';
import { Request } from 'express';
import BASE_URL from "../config"

const getPdfController = async (req: Request) => {
  
  const dir = `./pdfs/activity-${req.params.id}`;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await page.goto(`${BASE_URL}/${req.params.id}`, { waitUntil: 'networkidle2' });

  await page.pdf({
    path: `./pdfs/activity-${req.params.id}/activity.pdf`,                   
    printBackground: true
  });

  await browser.close();
  return;
};

export default getPdfController;
