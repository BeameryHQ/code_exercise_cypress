import faker from 'faker';

const personalInfo = () => {
    const password='A1234CD@E';
    cy.get('#id_gender2').click();
    cy.get('#customer_firstname').type('John')
    cy.get('#customer_lastname').type('Doe')
    cy.get('#passwd').type(password);
    cy.get('#days').select('19')
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
const createAnAccount=(emailId)=>{ 
  if (emailId === undefined) {
    emailId=faker.internet.email();
  }
  cy.get('#email_create').type(emailId);
  cy.get('#SubmitCreate').click();
}

describe('Homepage', function(){
    it('Sign Up successful', function(){
      // Question: Best place to pass the base url in the code
      cy.visit('http://automationpractice.com/');  
      // Question: What CSS selectors can be used instead of text
      cy.get('a').contains('Sign in').click();
      createAnAccount();
      personalInfo();
      // Question: Add assertions for personal info
      addressInfo();
      cy.get('#submitAccount').click();
      // Question: Add line number 46 and ask the candidate to replace with something better (like line number 31)
      // Question: Discuss about different wait types with the candidate
      cy.wait(1000);
      // cy.get("id for sign up page header").should("not.be.visible");
      
      // Question:  Add assertions to check the successful sign up
      cy.get('h1.page-heading')
       .should('have.text', 'My account')

      // Question: If you can write this whole scenario in a better manner what would be your approach
    });

    it('Sign Up fails', function(){
      cy.visit('http://automationpractice.com/');  
      cy.get('a').contains('Sign in').click();
      // Question: Ask the candidate to identify the reason of failure and fix it.
      // Answer: Non-unique email id is used causing test to fail
      createAnAccount('abc@def.com');
      personalInfo();
      addressInfo();
      cy.get('#submitAccount').click(); 
     
      cy.get('h1.page-heading')
       .should('have.text', 'My account')
    });

    it('Sign Up fails due to missing mandatory fields', function(){
      cy.visit('http://automationpractice.com/');  
      cy.get('a').contains('Sign in').click(); 
      createAnAccount();
      personalInfo(); 
      addressInfo();
      cy.get('#submitAccount').click(); 
      // Question: Remove 1 of the mandatory field form any function and ask candidate to fix the code and add assertions
    });

  });
