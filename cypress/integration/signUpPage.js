
 const URL = `${Cypress.env('app')}`;
// const URL = "https://www.asos.com/"

describe('homepage', function(){
    it('Verify user is on homepage', function(){
      cy.visit('https://www.asos.com/');  
      cy.get('[data-testid="myAccountIcon"]').click();
      cy.get('[data-testid="signup-link"]').click();
      cy.get('.qa-header').contains('Join');
      cy.get('[data-st-field="id-register-email"]').click().type('abc@mailinator.com');
      cy.get('[data-st-field="id-register-firstName"]').click().type('John');
      cy.get('[data-st-field="id-register-lastName"]').click().type('John');
      cy.get('[data-st-field="id-register-password"]').click().type('1234ascdZX');
      cy.get('#BirthDay').select('19').should('have.value','19');
      //it should fail here..
      cy.get('#BirthMonth').select('February').should('have.value','February');
      cy.get('#BirthYear').select('2000').should('have.value','2000');
      cy.get('#female').should('have.value','F');
      cy.get('#register').click();

    });

  });