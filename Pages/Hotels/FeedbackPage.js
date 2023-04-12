const { expect } = require("chai");
const moment = require("moment");


class FeedbackPage {

// Locators
feedbackSubmitLocator = '#submit-button';
feedbackSubmitErrorHeaderLocator = '#required';
redDottedErrorBoxLocator = '//fieldset[@style="padding: 5px; border: 2px dotted rgb(204, 0, 0);"]';
fiveStarRatingLocator = '//label[@for="page-rating-5"]';
feedbackCommentsLocator = '#verbatim';
willYouReturnLocator = '#will-you-return';
priorBookingLocator = '//label[@for="booked-here-before-yes"]';
feedbackSuccessLocator = '//label[@for="were-you-successful-yes"]';
thankYouforFeedbackLocator = '//h5[@data-localization="thank-you-heading"]';

// Functions
async submitFeedbackBtn() {
  
    await $(this.feedbackSubmitLocator).click()
}

async feedbackErrorHeaderDisplayed() {
    const feedbackError = await $(this.feedbackSubmitErrorHeaderLocator).isDisplayed();
    expect(feedbackError, 'Feedback error is not displayed').to.be.true;
}

async redDottedErrorBoxDisplayed() {
    await $(this.redDottedErrorBoxLocator).waitForDisplayed();
    return await $(this.redDottedErrorBoxLocator).isDisplayed();
  
}

async fiveStarRating() {
    await $(this.fiveStarRatingLocator).click();
}

async commentFeedback(feedbackComment) {
    await $(this.feedbackCommentsLocator).setValue(feedbackComment);
}

async howLikelyWillYouReturn(feedbackLikely) {
    await $(this.willYouReturnLocator).selectByVisibleText(feedbackLikely);
}

async priorBookingOnHotelsWebsite() {
    await $(this.priorBookingLocator).click();
}

async successfullFeedback() {
    await $(this.feedbackSuccessLocator).click();
}

async thankYouForFeedbackHeader() {
    const ThankYouMessage = await $(this.thankYouforFeedbackLocator).isDisplayed();
    expect(ThankYouMessage, 'Thank you for feedback not displayed').to.be.true;
}

}
module.exports = FeedbackPage;