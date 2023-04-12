const { expect } = require("chai");
const moment = require("moment");

class SignUpPage {

//locators

createAnAccountHeaderLocator = '//h1[text()="Create an account"]';
signUpEmailInputLocator = '#signupFormEmailInput';
signUpFirstNameInputLocator = '#signupFormFirstNameInput';
signUpLastNameInputLocator = '#signupFormLastNameInput';
signUpPasswordInputLocator = '#signupFormPasswordInput';
enterValidEmailErrorLocator = '#signupFormEmailInput-error';
enterValidFNameErrorLocator = '#signupFormFirstNameInput-error';
enterValidLNameErrorLocator = '#signupFormLastNameInput-error';
keepMeSignedInCheckboxHeader = '//span[text()="Keep me signed in"]'
keepMeSignedInCheckboxLocator = '#rememberMeSignUpCheckbox';
signUpSubmitBtnLocator = '#signupFormSubmitButton';
termsAndConditionsLocator = '=Terms and Conditions';


// Functions

async enterSignUpEmail(email) {
    await $(this.createAnAccountHeaderLocator).waitForDisplayed()
    await $(this.signUpEmailInputLocator).setValue(email);
}

async emailErrorDisplayed() {
    const emailError = await $(this.enterValidEmailErrorLocator).isDisplayed();
    expect(emailError, 'Email error not displayed').to.be.true; 
}

async enterSignUpFName(fName) {
    await $(this.signUpFirstNameInputLocator).setValue(fName);
}

async fNameErrorDisplayed() {
    const fNameError = await $(this.enterValidFNameErrorLocator).isDisplayed();
    expect(fNameError, 'First name error not displayed').to.be.true;
}

async enterSignUpLName(lName) {
    await $(this.signUpLastNameInputLocator).setValue(lName);
}

async lNameErrorDisplayed() {
    const lNameError = await $(this.enterValidLNameErrorLocator).isDisplayed();
    expect(lNameError, 'Last name error not displayed').to.be.true;
}

async enterSignUpPassword(pass) {
    await $(this.signUpPasswordInputLocator).setValue(pass);
}

async keepMeSignedInCheckboxDisplayed() {
    const keepMeSignedInHeader = await $(this.keepMeSignedInCheckboxHeader).isDisplayed();
    expect(keepMeSignedInHeader, 'Keep me signed in header not displayed').to.be.true;
}

async keepMeSignedInCheckboxEnabled() {
    const keepMeSignedInEnabled = await $(this.keepMeSignedInCheckboxLocator).isEnabled();
    expect(keepMeSignedInEnabled, 'Keep me signed in checkbox not enabled').to.be.true;
}

async signUpSumbitBtnDisplayed() {
    const signUpBtn = await $(this.signUpSubmitBtnLocator).isDisplayed();
    expect(signUpBtn, 'Sign up button not displayed').to.be.true;
}

async signUpSubmitBtnDisabled() {
   const signUpBtnDisabled = await $(this.signUpSubmitBtnLocator).isEnabled();
   expect(signUpBtnDisabled, 'Sign up button is enabled').to.be.false;
}

async clickTermsAndConditions() {
    await $(this.termsAndConditionsLocator).click();
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://www.hotels.com/lp/b/terms-of-service') === 0) {
            break;
        }
    }
}
}
module.exports = SignUpPage;