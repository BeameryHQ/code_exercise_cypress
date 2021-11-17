import SignInPage from '../pageObject/signUpPage';
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

    it('Sign Up successful', function(){
      cy.visit('https://www.asos.com/');  
      //Fix the failures
      cy.signUp('abc@mailinator.com', '1234ascdZX')
     
      // Add line number 30 and ask the candidate to repalce with something better (like line number 31)
      cy.wait(1000);
      // cy.get("id for sign up page header").should("not.be.visible");
      
      // add assertions to check the successful sign up
      cy.get('id of the text element')
       .should('have.text', 'Successful register')
    });

    it('Sign Up successful', function(){
      cy.visit('https://www.asos.com/');  
      //Once signup function is fixed, use non-unique email to register and ask candidate to find the issue and fix it
      cy.signUp('non-unique@email.com', '1234ascdZX')

      cy.get('id of the text element')
       .should('have.text', 'Successful register')
    });

    it('Sign Up fails due to missing mandatory fields', function(){
      cy.visit('https://www.asos.com/');  
      // Implement the test code along with assertions
    });

  });