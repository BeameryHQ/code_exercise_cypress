
 const URL = `${Cypress.env('app')}`;
// const URL = "https://www.asos.com/"

describe('homepage', function(){
    it.skip('Verify user is on homepage', function(){
      //  cy.visit("https://www.asos.com/");
      cy.log(URL);
      cy.visit(`${Cypress.env('app')}`);
        cy.get('[data-testid="myAccountIcon"]').should('be.visible');
    });

    it('Go to Sign in page', function(){
      cy.visit(`${Cypress.env('app')}`);
       cy.get(`[aria-label="Open menu"]`).click();
       cy.get('a','Sign in').click();
    })
})