import puppeteer from 'puppeteer'

export const drawScreen = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://h5.ele.me/')
  await page.setViewport({
    width: 375,
    height: 675,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true
  })
  await page.screenshot({
    path: 'ex.png'
  })
  await browser.close()
}