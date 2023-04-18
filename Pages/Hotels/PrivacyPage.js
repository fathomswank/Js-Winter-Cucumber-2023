class PrivacyPage {

    lastUpdatedDateLocator = '//p[contains(text(), "Last Updated:")]';

    async switchWindow() {

        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            if (currentUrl.includes('customer_care')) {
                break;
            }
        }
    }
    async currentDateRead() {
       return await $(this.lastUpdatedDateLocator).getText();
        
        
    }
}
module.exports = PrivacyPage;













