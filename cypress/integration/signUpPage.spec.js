import SignInPage from '../pageObject/signUpPage';
 const URL = `${Cypress.env('app')}`;
// const URL = "https://www.asos.com/"

const signUp = (email, password) => {
  cy.get('[data-st-field="id-register-email"]').type(email)
    cy.get('[data-st-field="id-register-firstName"]').type('John')
    cy.get('[data-st-field="id-register-lastName"]').type('Doe')
    cy.get('[data-st-field="id-register-password"]').type(password)
    cy.get('#BirthDay').select('19').should('have.value','19');
    //it should fail here..
    cy.get('#BirthMonth').select('February');
    cy.get('#BirthYear').select('2000');
    cy.get('#female');
    cy.get('#register').submit()
};

describe('Homepage', function(){
    it('Sign Up successful', function(){
      cy.visit('https://www.asos.com/');  
      //Question: Fix the failures in signUp function in commands.js file
      signUp('abc@mailinator.com', '1234ascdZX')
     
      // Question: Add line number 30 and ask the candidate to replace with something better (like line number 31)
      // Question: Discuss about different wait types with the candidate
      cy.wait(1000);
      // cy.get("id for sign up page header").should("not.be.visible");
      
      // Question:  Add assertions to check the successful sign up
      cy.get('<id of the text element>')
       .should('have.text', 'Successful register')
    });

    it('Sign Up successful', function(){
      cy.visit('https://www.asos.com/');  
      // Question: Once signup function is fixed, use non-unique email to register and ask candidate to find the issue and fix it
      signUp('non-unique@email.com', '1234ascdZX')

      cy.get('<id of the text element>')
       .should('have.text', 'Successful register')
    });

    it('Sign Up fails due to missing mandatory fields', function(){
      cy.visit('https://www.asos.com/');  
      // Question: Implement the test code along with assertions
    });

  });