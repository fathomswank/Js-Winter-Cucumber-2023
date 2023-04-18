class Homepage {

    #createNewAccountBtnLocator = 'a[data-testid=open-registration-form-button]';
    #allLinksLocator = '<a>';
    #loginEmailLocator = '#email';
    #loginPasswordLocator = '#pass';
    #loginButtonLocator = '<button>';
 
    async clickCreateNewAccountBtn() {
        await $(this.#createNewAccountBtnLocator).click();
    }

    async getLinksCount() {
        const allLinks = await $$(this.#allLinksLocator);
        return allLinks.length;
    }

    async enterLoginEmail(loginEmail) {
        await $(this.#loginEmailLocator).setValue(loginEmail);
    }

    async enterLoginPassword(loginPwd) {
        await $(this.#loginPasswordLocator).setValue(loginPwd);
    }

    async clickLoginButton() {
        await $(this.#loginButtonLocator).click();
    }

    async isLoginEmailEnabled() {
        return await $(this.#loginEmailLocator).isEnabled();
    }

    async isLoginPasswordEnabled() {
        return await $(this.#loginPasswordLocator).isEnabled();
    }

    async isLoginButtonEnabled() {
        return await $(this.#loginButtonLocator).isEnabled();
    }

}
module.exports = Homepage;
