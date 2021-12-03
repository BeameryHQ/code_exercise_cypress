// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signUp', (email, password) => {
    cy.get('[data-st-field="id-register-email"]').type(email)
    cy.get('[data-st-field="id-register-firstName"]').type('John')
    cy.get('[data-st-field="id-register-lastName"]').type('Doe')
    cy.get('[data-st-field="id-register-password"]').type(password)
    cy.get('#BirthDay').select('19').should('have.value','19');
    //it should fail here..
    cy.get('#BirthMonth').select('February').should('have.value','February');
    cy.get('#BirthYear').select('2000').should('have.value','2000');
    cy.get('#female').should('have.value','F');
    cy.get('#register').submit()
  })
