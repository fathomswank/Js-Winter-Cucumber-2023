const { Given, When, Then } = require('@wdio/cucumber-framework');
const Homepage = require('../../Pages/Hotels/Homepage');
const FeedbackPage = require('../../Pages/Hotels/FeedbackPage')
const { expect } = require("chai");

const homepage = new Homepage();
const feedbackpage = new FeedbackPage();

When(/^I click on submit feedback$/, async function () {
    await feedbackpage.submitFeedbackBtn();
    await browser.pause(2000);
})

Then(/^I verify "Please fill in the required information highlighted below." error displayed$/, async function () {
    await feedbackpage.feedbackErrorHeaderDisplayed();
})

Then(/^I verify red-dotted line is displayed around star section$/, async function () {
    const isRedBoxDisplayed = await feedbackpage.redDottedErrorBoxDisplayed();
    expect(isRedBoxDisplayed, 'Error Box is NOT displayed').to.be.true
})

Then(/^I select 5 star rating$/, async function () {
    await feedbackpage.fiveStarRating();
})

Then(/^I enter "(.+)" in comments section$/, async function (feedbackComment) {
    await feedbackpage.commentFeedback(feedbackComment);
    await browser.pause(2000);
})

Then(/^I select "(.+)" for how likely are you to return to Hotels website$/, async function (feedbackLikely) {
    await feedbackpage.howLikelyWillYouReturn(feedbackLikely);
    await browser.pause(2000);
})

Then(/^I select "Yes" for "Prior to this visit, have you ever booked on Hotels website$/, async function () {
    await feedbackpage.priorBookingOnHotelsWebsite();
})

Then(/^I select "Yes" for "Did you accomplish what you wanted to do on this page"$/, async function () {
    await feedbackpage.successfullFeedback();
})

Then(/^I confirm "THANK YOU FOR YOUR FEEDBACK" header is displayed$/, async function () {
    await feedbackpage.thankYouForFeedbackHeader();
})