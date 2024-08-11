 // npx cypress run --spec "cypress/e2e/trustcrow.cy.js"
 /// <reference types ="cypress"/>

     describe('Login Automation Test', () => {
     it('log in with valid credentials', () => {
     
      const loginUrl = 'https://invoicing-backend-eozb.onrender.com/api/auth/signup';
      const email = 'joe@mailinator.com'; 
      const password = 'Joe2024@';
    
      cy.request ({
        method :'POST',
        url: loginUrl,
        body:{
            email : email,
            password : password,
        },
        failOnStatusCode: false
      }).then ((response)=> {
      expect(response.status).to.eq(200);
     })

     })
     })

     // RESPONSE RETURNED 400..FAILED TO RETURN 200
     // THIS INDICATES A BAD REQUEST WAS PASSED
     // Url is invalid for the payload been passed, should be a login url and not a signUp url.



     
     
  
      