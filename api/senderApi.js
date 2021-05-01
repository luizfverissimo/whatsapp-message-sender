const puppeteer = require('puppeteer-core');
const stringInject = require('stringinject');
const locateChrome = require('locate-chrome');

function createMessage(message, infos) {
  const messageCreated = stringInject.default(message, infos);
  const messageWithoutSpaces = messageCreated.replace(/ /g, '%20');
  return messageWithoutSpaces;
}

function createUrl(message, phone) {
  const urlCreated = `https://web.whatsapp.com/send?phone=55${phone}&text=${message}`;
  return urlCreated;
}

async function sendWhatsappMessage(message, contacts, timeBefore, timeAfter) {
  const locateChromePath = await locateChrome()

  const browser = await puppeteer.launch({
    executablePath: locateChromePath,
    headless: false,
    defaultViewport: {
      width: 1024,
      height: 768
    }
  });
  const page = await browser.newPage();

  for (let contact of contacts) {
    try {
      const messageCreated = createMessage(message, contact);
      const urlCreated = createUrl(messageCreated, contact.telefone);

      await page.goto(urlCreated);
      await page.waitForSelector('#side > header');
      await page.waitForTimeout((Math.random() * (4 - 2) + 2) * timeBefore);
      await page.keyboard.press('Enter');
      await page.waitForTimeout((Math.random() * (4 - 2) + 2) * timeAfter);
    } catch (err) {
      console.log(err);
    }
  }

  await browser.close();
}

module.exports = sendWhatsappMessage;
