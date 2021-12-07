import faker from 'faker';

//const URL = `${Cypress.env('app')}`;
// const URL = "https://www.asos.com/"
const emailId=faker.internet.email();
const password='A1234CD@E';

const personalInfo = () => {
    cy.get('#id_gender2').click();
    cy.get('#customer_firstname').type('John')
    cy.get('#customer_lastname').type('Doe')
   // cy.get('#email').should('have.text',emailId);
    cy.get('#passwd').type(password);
    cy.get('#days').select('19').should('have.value','19');
    //it should fail here..
    cy.get('#months').select('February');
    cy.get('#years').select('2000');
};

const addressInfo=()=>{
  cy.get('#firstname').type('John');
  cy.get('#lastname').type('Doe');
  cy.get('#address1').type(faker.address.streetName());
  cy.get('#city').type(faker.address.city());
  cy.get('#id_state').select('Alabama');
  cy.get('#postcode').type(faker.address.zipCode('01234'));
  cy.get('#phone_mobile').type(faker.phone.phoneNumber('0123456789'));
  cy.get('#alias').type(faker.address.streetAddress());
  
}
const createAnAccount=()=>{ 
  cy.get('#email_create').type(emailId);
  cy.get('#SubmitCreate').click();
}

describe('Homepage', function(){
    it.only('Sign Up successful', function(){
      cy.visit('http://automationpractice.com/');  
      cy.get('a').contains('Sign in').click();
      createAnAccount();
      personalInfo();
      addressInfo();
      cy.get('#submitAccount').click();
      // cy.get('[data-testid="myAccountIcon"]')
      // .should('have.attr', 'aria-checked', 'true');
      
    
      //Question: Fix the failures in signUp function in commands.js file
      
     
      // Question: Add line number 30 and ask the candidate to replace with something better (like line number 31)
      // Question: Discuss about different wait types with the candidate
      cy.wait(1000);
      // cy.get("id for sign up page header").should("not.be.visible");
      
      // Question:  Add assertions to check the successful sign up
      // cy.get('<id of the text element>')
      //  .should('have.text', 'Successful register')
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
