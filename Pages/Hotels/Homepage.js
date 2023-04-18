class Homepage {

    #hotelsLogoLocator = '//a[contains(@class , "header-logo")]';    
    #destinationButtonLocator = 'button[data-stid=destination_form_field-menu-trigger]';
    #destinationInputLocator = '#destination_form_field';
    #destinationAutoSuggestionLocator = '//li[contains(@class, "has-subtext")]//button';
    #calendarButtonLocator = 'div[class*=uitk-date-picker-menu]'
    #calendarDoneButtonLocator = 'button[data-stid=apply-date-picker]';
    #previousMonthArrowLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    #nextMonthArrowLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    #leftMonthHeadingLocator = '(//div[@data-stid="date-picker-month"])[1]//h2';
    #calendarDatesLocatorStarts = '//h2[text()="';
    #calendarDatesLocatorEnds = '"]/following-sibling::table//button';
    #travelersButtonLocator = 'button[data-stid=open-room-picker]';
    #travelersHeadingLocator = 'h3=Travelers'; 
    #roomAdultsMinusLocatorStarts = '((//h3[text()="';
    #roomAdultsMinusLocatorEnds = '"]/following-sibling::div)[1]//button)[1]';
    #roomAdultsPlusLocatorStarts = '((//h3[text()="';
    #roomAdultsPlusLocatorEnds = '"]/following-sibling::div)[1]//button)[2]';
    #roomAdultsCountLocatorStarts = '(//h3[text()="';
    #roomAdultsCountLocatorEnds = '"]/following-sibling::div)[1]//input';
    adultPlusButtonLocator = '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]'; 
    #roomChildrenMinusLocatorStarts = '((//h3[text()="';
    #roomChildrenMinusLocatorEnds = '"]/following-sibling::div)[2]//button)[1]';
    #roomChildrenPlusLocatorStarts = '((//h3[text()="';
    #roomChildrenPlusLocatorEnds = '"]/following-sibling::div)[2]//button)[2]';
    #roomChildrenCountLocatorStarts = '(//h3[text()="';
    #roomChildrenCountLocatorEnds = '"]/following-sibling::div)[2]//input';
    #childrenPlusButtonLocator = '(//button[@type="button"])[11]';
    childrenMinusButtonlocator = '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button[@class="uitk-layout-flex-item uitk-step-input-touch-target"]';
    allChildrenAgeDropdownLocator = '//select[starts-with(@id, "age-traveler_selector_children_age_selector")]';
    childAgeDropdownLocatorStarts = '//label[text()="';
    childAgeDropdownLocatorEnds = '"]/following-sibling::select';
    childAgeBox1Locator = '//select[@id="age-traveler_selector_children_age_selector-0-0"]';
    childAgeBox2Locator = '//select[@id="age-traveler_selector_children_age_selector-0-1"]';
    childAgeBox3Locator = '//select[@id="age-traveler_selector_children_age_selector-0-2"]';
    #travelersDoneButtonLocator = '#traveler_selector_done_button';
    #anotherRoomLocator = '#traveler_selector_add_room'; 
    signinButtonLocator = '//button[text() = "Sign in"]';
    signupButtonLocator = '//a[text() = "Sign up, it’s free"]';
    signinMenuLocator = '//div [@class="uitk-menu-container uitk-menu-open uitk-menu-pos-right uitk-menu-container-autoposition uitk-menu-container-has-intersection-root-el"]'
    feedbackButtonLocatror = '//a[text()="Feedback"]';
    #searchButtonLocator = '#search_button';
    room1AdultsValueLocator = '//input[@id="traveler_selector_adult_step_input-0"]';
    room1ChildrenValueLocator = '//input[@id="traveler_selector_children_step_input-0"]';
    totalPersonLocator = '//input[@placeholder="Placeholder"]';
    roomMenuLocator = '//div[@class="uitk-menu-container uitk-menu-open uitk-menu-pos-right uitk-menu-container-autoposition uitk-menu-container-has-intersection-root-el uitk-menu-container-over-trigger"]';
    englishLanguageLocator = '//div[text() = "English"]';
    espanolLanguageLocator = '//div[text()= "Español"]';
    languageSelectLocator = '//select[@id="language-selector"]';
    saveButtonLocator = '//button[text()= "Save"]';
    guardarButtonLocator = '//button[text()= "Guardar"]';
    listYourPropertyLocator = '//a[@data-stid="listYourProperty-button"]';



    async isHotelsLogoDisplayed() {
        await $(this.#hotelsLogoLocator).waitForDisplayed();
        await $(this.#hotelsLogoLocator).isDisplayed();
    }

    
    async enterDestination(destination) {
        await $(this.#destinationButtonLocator).click();
        await $(this.#destinationInputLocator).waitForDisplayed();
        await $(this.#destinationInputLocator).setValue(destination);
    }

    async selectDestinationFromAutoSuggestion(destinationToSelect) {
        const allSuggestions = await $$(this.#destinationAutoSuggestionLocator);

        for (const suggestion of allSuggestions) {
            const text = await suggestion.getAttribute('aria-label');
            if (text.toLowerCase().startsWith(destinationToSelect.toLowerCase())) {
                await suggestion.click();
                break;
            }
        }
    }

    
    async selectDate(date) {
        const isDoneBtnDisplayed = await $(this.#calendarDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#calendarButtonLocator).click();
            await $(this.#calendarDoneButtonLocator).waitForDisplayed();
        }
        const dateValuesInArray = date.split();
        const monthYear = dateValuesInArray[1] + ' ' + dateValuesInArray[2];
        await this.goToDesiredCalendar(monthYear);
        const allDates = await $$(this.#calendarDatesLocatorStarts + monthYear + this.#calendarDatesLocatorEnds);
        for (const dateElement of allDates) {
            const dateValue = await dateElement.getAttribute('data-day');
            if (dateValue.localeCompare(dateValuesInArray[0]) === 0) {
                await dateElement.click()
                break;
            }
        }
    }

    async goToDesiredCalendar(monthYear) {
        const isPreviousMonthArrowEnabled = await $(this.#previousMonthArrowLocator).isEnabled();
        for (let i = 1; i <= 12; i++) {
            const monthHeading = await $(this.#leftMonthHeadingLocator).getText();
            if (monthHeading.toLowerCase().localeCompare(monthYear.toLowerCase()) !== 0) {
                if (i === 1 && isPreviousMonthArrowEnabled) {
                    await $(this.#previousMonthArrowLocator).click();
                } else {
                    await $(this.#nextMonthArrowLocator).click();
                }
            } else {
                break;
            }
        }
    }

    async clickCalendarDoneButton() {
        await $(this.#calendarDoneButtonLocator).click();
    }


    async clicktravelers() {
        await $(this.#travelersButtonLocator).click();
    }

    async getTravelersCount() {
        await $(this.#travelersButtonLocator).getText();
    }

    async selectAdultsInRoom(adultCount, roomNumber) {
        const isDoneBtnDisplayed = await $(this.#travelersDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#travelersButtonLocator).click();
            await $(this.#travelersHeadingLocator).waitForDisplayed();
        }
        for (let i = 0; i <= 12; i++) {
            const adultCountOnWeb = await $(this.#roomAdultsCountLocatorStarts + roomNumber + this.#roomAdultsCountLocatorEnds).getAttribute('value');
            if (adultCountOnWeb < adultCount) {
                await $(this.#roomAdultsPlusLocatorStarts + roomNumber + this.#roomAdultsPlusLocatorEnds).click();
            } else if (adultCountOnWeb > adultCount) {
                await $(this.#roomAdultsMinusLocatorStarts + roomNumber + this.#roomAdultsMinusLocatorEnds).click();
            } else {
                break;
            }
        }
    }

    async selectChildrenInRoom(childrenCount, roomNumber) {
        const isDoneBtnDisplayed = await $(this.#travelersDoneButtonLocator).isDisplayed();
        if (isDoneBtnDisplayed) {
            await $(this.#travelersButtonLocator).click();
            await $(this.#travelersHeadingLocator).waitForDisplayed();
        }
        for (let i = 0; i <= 12; i++) {
            const childrenCountOnWeb = await $(this.#roomChildrenCountLocatorStarts + roomNumber + this.#roomChildrenCountLocatorEnds).getAttribute('value');
            if (childrenCountOnWeb < adultCount) {
                await $(this.#roomChildrenPlusLocatorStarts + roomNumber + this.#roomChildrenPlusLocatorEnds).click();
            } else if (childrenCountOnWeb > childrenCount) {
                await $(this.#roomChildrenMinusLocatorStarts + roomNumber + this.#roomChildrenMinusLocatorEnds).click();
            } else {
                break;
            }
        }
    }

    async addAdult(data) {
        for (let i = 0; i < data; i++) {
        await $(this.adultPlusButtonLocator).click();
        }
    }

    async addChildren(data) {
        for (let i = 0; i < data; i++) {
            await $(this.#childrenPlusButtonLocator).click();
          }
        
    }

    async removeChildren(data) {
        for (let i = 0; i < data; i++) {
        await $(this.childrenMinusButtonlocator).click();
        }
    }

    async inputChild1Age() {
        await $(this.childAgeBox1Locator).selectByIndex(5);   
    }

    async inputChild2Age() {
        await $(this.childAgeBox2Locator).selectByIndex(1);   
    }

    async inputChild3Age() {
        await $(this.childAgeBox3Locator).selectByIndex(8);   
    }

    async isChildrenPlusButtonEnable() {
        await $(this.#childrenPlusButtonLocator).isEnabled();
    }

    async isChildrenMinusButtonEnable() {
        return await $(this.childrenMinusButtonlocator).isEnabled();
    }

    async childrenAgeDropdownCount() {
        const allChildrenAgeDropdownArray = await $$(this.allChildrenAgeDropdownLocator);
        return allChildrenAgeDropdownArray.length;
    }

    async selectChildAge(childNum, childAgeToSelect) {
        const childAgeDropdownLocator = this.childAgeDropdownLocatorStarts + childNum + this.childAgeDropdownLocatorEnds;
        const childAgeDropdown = await $(childAgeDropdownLocator);
        await childAgeDropdown.selectByVisibleText(childAgeToSelect);
    }

    async isChildrenAgeDropDownDisplayed() {
        return await $(this.allChildrenAgeDropdownLocator).isDisplayed();

    }

    async clickTravelersDoneButton() {
        await $(this.#travelersDoneButtonLocator).click();
    }

    async clickSearchButton() {
        await $(this.#searchButtonLocator).click();
    }

    async clickSignInButton() {
        await $(this.signinButtonLocator).click();
    }

    async clickSignUpButton() {
        await $(this.signupButtonLocator).click();
    }

    async clickFeedbackButton() {
        await $(this.feedbackButtonLocatror).click();
    }


    async waitForSignInMenu() {
        await $(this.signinMenuLocator).waitForDisplayed();
    }

    async totalRoomPersonsCount() {

        const room1AdultsValue = await $(this.room1AdultsValueLocator).getAttribute('value');
        const room1ChildrenValue = await $(this.room1ChildrenValueLocator).getAttribute('value');
        let totalPersonsInRooms= parseFloat(room1AdultsValue) + parseFloat(room1ChildrenValue);

       return totalPersonsInRooms;
    }

    async totalTravelersCount() {

        const getTotalTravelersValue = await $(this.totalPersonLocator).getAttribute('value');
        const numOftravelers = getTotalTravelersValue.slice(0, getTotalTravelersValue.indexOf(' '));
        let totalTravelers = parseFloat(numOftravelers);
        
        return totalTravelers;
    }

    

   

    async clickOnEnglishLanguage() {
        await $(this.englishLanguageLocator).click();
    }

    async clickOnEspanolLanguage() {
        await $(this.espanolLanguageLocator).click();
    }
    
    async chooseLanguage(data) {
        await $(this.languageSelectLocator).selectByIndex(data);
        
    }

    async chooseEnglishLanguage() {
        await $(this.languageSelectLocator).click();
       // await $(this.languageSelectLocator).selectByVisibleText('English (United States)');
    }

    async clickLanguageMenuSaveButton() {
        await $(this.saveButtonLocator).click();
    }

    async clickLanguageMenuGuardarButton() {
        await $(this.guardarButtonLocator).click();
    }

    async isEnglishDisplayed() {
        const languageValue = await $(this.englishLanguageLocator).getText();
        const result = (languageValue.localeCompare('English')===0);
        return result;
    }

    async isEspanolDisplayed() {
        const languageValue = await $(this.espanolLanguageLocator).getText();
        const result = (languageValue.localeCompare('Español') === 0);
        return result;
    }

   

    async clickListYourProperty() {
        await $(this.listYourPropertyLocator).click();
    }
    
    async switchWindow() {

        const allHandles = await browser.getWindowHandles();
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        if (currentUrl.includes('?locale=en_US?')) {
            break;
        }
    }

    }


}
module.exports = Homepage;