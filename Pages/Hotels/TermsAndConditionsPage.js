const { expect } = require("chai");
const moment = require("moment");

class TermsAndConditionsPage {

termsOfServiceHeaderLocator = '#_TERMS_OF_SERVICE';
lastRevisedDateLocator = 'span*=Last revised';


async termsOfServiceHeaderDisplayed() {
    const termsHeader = await $(this.termsOfServiceHeaderLocator).isDisplayed();
    expect(termsHeader, 'Terms of service Header is not displayed').to.be.true;
}

async lastRevisedDate() {
    const dateText = await $(this.lastRevisedDateLocator).getText();
    const updatedText = dateText.substr(13)
    const formattedDate = await updatedText.moment().format('MMddyy')
    expect(formattedDate, 'Different').to.be.equal(updatedText);
    
}

}
module.exports = TermsAndConditionsPage;