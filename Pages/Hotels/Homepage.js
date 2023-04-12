const { expect } = require("chai");
const moment = require("moment");

class HotelsHomePage {

// Locators
signInBtnLocator = '//button[text()="Sign in"]';
signUpBtnLocator = '//a[@data-stid="link-header-account-signup"]';
feedbackBtnLocator = '//a[text()="Feedback"]';
travelersLocator = '//button[@data-stid="open-room-picker"]';
addAdultsLocator = '//*[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
addChildLocator = '//*[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
child1AgeLocator = '#age-traveler_selector_children_age_selector-0-0';
child2AgeLocator = '#age-traveler_selector_children_age_selector-0-1';
child3AgeLocator = '#age-traveler_selector_children_age_selector-0-2';
travelersDoneBtnLocator = '#traveler_selector_done_button';
totalChildDropdownsLocator = 'select[name*=child-traveler_selector_children_age_selector-0-]';
minusChildLocator = '//*[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';

// Functions
async clickSignInBtn() {
    await $(this.signInBtnLocator).click();
}

async clickSignUpBtn() {
    await $(this.signUpBtnLocator).click();
}

async clickFeedbackBtn() {
    await $(this.feedbackBtnLocator).click();
    const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://pay.https://www.directword.io/survey/domain=www.hotels.com/locale=en_US?metadata=%7B%22url%22%3A%22https%3A%2F%2Fwww.hotels.com%2F%3Fpos%3DHCOM_US%26locale%3Den_US%22%2C%20%22duaid%22%3A%20%22d88d0c4d-cc55-4c14-a283-c3915a19b195%22%7D.com/') === 0) {
            break;
        }
    }
}

async clickTravelers() {
    await $(this.travelersLocator).click();
}

async addAdultTravelers() {
    await $(this.addAdultsLocator).click();
}

async addChildTravelers() {
    await $(this.addChildLocator).click();
}

async selectChild1Age(age) {
    await $(this.child1AgeLocator).selectByVisibleText(age);
}

async selectChild2Age(age) {
    await $(this.child2AgeLocator).selectByVisibleText(age);
}

async selectChild3Age(age) {
    await $(this.child3AgeLocator).selectByVisibleText(age);
}

async clickTravelersDone() {
    await $(this.travelersDoneBtnLocator).click();
}

async totalTravelers() {
    await $(this.travelersLocator).waitForDisplayed()
    return await $(this.travelersLocator).getText();
}
async totalChildrenDropdownCount() {
    return await $$(this.totalChildDropdownsLocator);
}

async addChildTravelersEnabled() {
    return await $(this.addChildLocator).isEnabled();
}

async minusChildTravelersEnabled() {
    return await $(this.minusChildLocator).isEnabled();
}

async subtractChildTraveler() {
    await $(this.minusChildLocator).click()
}


}
module.exports = HotelsHomePage;