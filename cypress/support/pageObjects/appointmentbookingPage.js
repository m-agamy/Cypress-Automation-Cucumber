class appointmentbookingPage_PO {

    selectConsultationeReasonThreadRemoval() {
        //select Ablation de fils as a reason for Consultatione
        cy.get('#consultationReasonName').click();
        cy.get('[data-cy="Ablation de fils"]').click();
    }

    consultationTimeTable() {
        cy.get('.search-card__rdv.availability-calendar.percy-hidden').should('be.visible');

    }

}
export default appointmentbookingPage_PO;
