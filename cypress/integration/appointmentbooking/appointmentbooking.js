import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import appointmentbookingPage_PO from "../../support/pageObjects/appointmentbookingPage";
import HomePage_PO from "../../support/pageObjects/homePage";

const homepage_po = new HomePage_PO();
const appointmentbookingpage_po = new appointmentbookingPage_PO();

Given('I access Maiia Home page', () => {

    homepage_po.visitHomePage();
})

When('I search for dr QATECHNIQUE', () => {
    homepage_po.searchForDr();
})


And('I select Reason for consultation Thread removal', () => {
    appointmentbookingpage_po.selectConsultationeReasonThreadRemoval();
})

Then('I should be presented with Consultation Time Table', () => {
    appointmentbookingpage_po.consultationTimeTable();
})