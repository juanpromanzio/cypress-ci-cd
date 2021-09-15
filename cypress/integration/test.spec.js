// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

///<reference types='cypress' />

describe('Test', () => {

    it('It', () => {
        cy.visit('localhost:5000')
        cy.get('[data-cy=Manual]').click()
        cy.get('[data-cy=Manual_table]').should('be.visible')
    })

    it('Table header', () => {
        cy.get('[data-cy=Manual_table] > thead > tr')
            .contains('th', 'Tool')
            .should('be.visible')

        cy.get('[data-cy=Manual_table] > thead > tr')
            .contains('th', 'State')
            .should('be.visible')

        cy.get('[data-cy=Manual_table] > thead > tr')
            .contains('th', 'Info')
            .should('be.visible')
    })

    it('State conditional', () => {
        cy.get('[data-cy=Manual_table] > tbody > :nth-child(1) > :nth-child(2) > .new')
            .invoke('attr', 'data-badge-caption')
            .then((dataBadgeCaption) => {
                switch (dataBadgeCaption) {
                    case 'Trial':
                        cy.get('[data-cy=Manual_table] > tbody > :nth-child(1) > :nth-child(2) > .new').should('have.css', 'background-color', 'rgb(33, 150, 243)')
                        break;
                    case 'Hold':
                        cy.get('[data-cy=Manual_table] > tbody > :nth-child(1) > :nth-child(2) > .new').should('have.css', 'background-color', 'rgb(244, 67, 54)')
                        break;
                    case 'Assess':
                        cy.get('[data-cy=Manual_table] > tbody > :nth-child(1) > :nth-child(2) > .new').should('have.css', 'background-color', 'rgb(255, 235, 59)')
                        break;
                    default:
                        break;
                }
            }).should('be.visible')
    })
})