import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

  Given('I access Maiia Home page', () => {
        cy.visit('https://www.staging.maiia.com/');
        cy.title().should('eq','Maiia - RDV médical et Téléconsultation - Professionnels de santé');
    })
    
    When('I search for dr QATECHNIQUE', () =>{
        cy.get('#downshift_input_0').type('Test QATECHNIQUE{enter}');
        cy.wait(3000);
        cy.get('#downshift-simple-item-0').click();
        cy.title().should('eq','Maiia - RDV médical et Téléconsultation - Professionnels de santé');
    })
    
    
    And('I select Reason for consultation Thread removal', () => {
        cy.get('#consultationReasonName').click();
        cy.get('[data-cy="Ablation de fils"]').click();
    })
    
    Then('I should be presented with Consultation Time Table', () => {
        cy.get('.search-card__rdv.availability-calendar.percy-hidden').should('be.visible');
    })