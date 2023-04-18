class Loginpage {
    
    #loginErrorLocator = '//div[contains(text() , "connected to an account")]'

    async isLoginErrorDisplayed() {
        await $(this.#loginErrorLocator).waitForDisplayed();
        return await $(this.#loginErrorLocator).isDisplayed();
    }

}
module.exports = Loginpage;