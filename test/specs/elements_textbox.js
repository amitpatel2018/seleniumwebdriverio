const demoqa_homepage = require('../pageobjects/demoqa_homepage');
const demoqa_homepage_module = require('../pageobjects/demoqa_homeapge_module');
const assert = require('assert');

describe('Textbox test in Elements', function(){
    it('Navigate to URL', function() {
        browser.navigateTo('https://www.demoqa.com');
        const actual = browser.getTitle();
        assert.strictEqual(actual, 'ToolsQA');
        const elements = $('.card-body').$('h5=Elements');
        elements.scrollIntoView();
        elements.click();
        const textBox = $('#item-0');
        textBox.click();
        const fullName = $('#userName');
        fullName.setValue("Chris Smith");
        const email = $('#userEmail');
        email.setValue("chrissmith123@gmail.com");
        const currentAddress = $('#currentAddress');
        currentAddress.setValue("Current Address");
        const permanentAddress = $('#permanentAddress');
        permanentAddress.setValue('Permanent Address');
        const submitButton = $('#submit');
        submitButton.scrollIntoView();
        submitButton.click();



        // demoqa_homepage.elements.scrollIntoView();
        // demoqa_homepage.elements.click();
        // demoqa_homepage.textBox.click();
        // demoqa_homepage.fillTextboxes('Richard Smith', 'rs123@yahoo.com', 'C Address', 'P Address');
        // demoqa_homepage.submitButton.scrollIntoView();
        // demoqa_homepage.submitButton.click();

    });
    // it('clicks on element and fills textboxes', function() {
    //     $(demoqa_homepage_module.elements).scrollIntoView();
    //     $(demoqa_homepage_module.elements).click();
    //     $(demoqa_homepage_module.textbox).click();
    //     $(demoqa_homepage_module.fullName).setValue("abc");
    //     $(demoqa_homepage_module.email).setValue('abc123@yahoo.com');
    //     $(demoqa_homepage_module.currentAddress).setValue('some address');
    //     $(demoqa_homepage_module.permanentAddress).setValue('some address');
    //     $(demoqa_homepage_module.submitButton).scrollIntoView();
    //     $(demoqa_homepage_module.submitButton).click();
    // })
});