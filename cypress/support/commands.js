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

Cypress.Commands.add('navigateToProductCategories', () => 
    {
        cy.visit('https://www.demoblaze.com/index.html')
    })


Cypress.Commands.add('addItemsToCart', () => {
     cy.contains('Samsung galaxy s6').click()
     cy.contains('Add to cart').click()
     cy.contains('Cart').click()
     cy.contains('Home').click()
     cy.contains('Laptops').click()
     cy.contains('Sony vaio i5').click()
     cy.contains('Home').click()
     cy.contains('Monitors').click()
  })

  Cypress.Commands.add('verifyCategoriesVisible', (dataTable) => {
    dataTable.hashes().forEach((row) => {
        cy.get('#itemc', row.categoria).should('be.visible')
    })
  })


  //////////////////////////////// Realizar compra completa //////////////////////////////////

  
Cypress.Commands.add('addItemsToCartandBuy', () => {
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.contains('Home').click()
    cy.contains('Laptops').click()
    cy.contains('Sony vaio i5').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.contains('Place Order').click()
    cy.get('#name').type('TestUno')
    cy.get('#country').type('Colombia')
    cy.get('#city').type('Sahagún')
    cy.get('#card').type('123456789')
    cy.get('#month').type('Mayo')
    cy.get('#year').type('2024')
    cy.contains('Purchase').click()



 })

 Cypress.Commands.add('verifyThankYouMessage', () => {
    cy.contains('123456789').should('be.visible')
  })