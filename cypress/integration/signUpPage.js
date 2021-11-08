
 const URL = `${Cypress.env('app')}`;
// const URL = "https://www.asos.com/"

describe('homepage', function(){
    it.skip('Verify user is on homepage', function(){
      cy.visit('https://www.asos.com/');  
      cy.get('[data-testid="myAccountIcon"]').click();
      cy.get('[data-testid="signup-link"]').click();
      cy.get('.qa-header').contains('Join');
      cy.get('[data-st-field="id-register-email"]').click().type('abc@mailinator.com');
      cy.get('[data-st-field="id-register-lastName"]').click().type('John');
      cy.get('[data-st-field="id-register-password"]').click().type('1234ascdZX');
      cy.get('BirthMonth"')
    });

    it('Go to Sign in page', function(){
      cy.visit(`${Cypress.env('app')}`);
       cy.get(`[aria-label="Open menu"]`).click();
       cy.get('a','Sign in').click();
    })
})