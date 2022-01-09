class HomePage_PO {

    visitHomePage() {
        cy.visit('https://www.staging.maiia.com/');
        cy.title().should('eq', 'Maiia - RDV médical et Téléconsultation - Professionnels de santé');
    }

    searchForDr() {
        cy.get('#downshift_input_0').type('Test QATECHNIQUE{enter}');
        cy.wait(3000);
        cy.get('#downshift-simple-item-0').click();
        cy.title().should('eq', 'Maiia - RDV médical et Téléconsultation - Professionnels de santé');
    }

}
export default HomePage_PO;
