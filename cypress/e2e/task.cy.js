  /// <reference types ="cypress"/>
 describe('Login functionality', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    let alertText = 'Invalid Credentials'
    cy.on('window:alert', (message) => {
        alertText = message;
        return true;
    })
    it('Successful login', () => {
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('.oxd-button').click()
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    })
    it('Unsuccessful login', () => {

        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin124')
        cy.get('.oxd-button').click()

        cy.wrap(alertText).should('equal', 'Invalid Credentials')

    })

 })
