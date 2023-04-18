class TCPage {

    lastRevisedDateLocator = '//span[contains(text(), "Last revised:")]';

    async switchWindow() {

        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes('terms-of-service')) {
                break;
            }
        }
    }

    async currentDateRead() {
       return await $(this.lastRevisedDateLocator).getText();   
    }
}

module.exports = TCPage;