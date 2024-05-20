describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    //cy.contains('Log in').click()
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.contains('Cart').click()
    cy.contains('Home').click()
    cy.contains('Laptops').click()
    cy.contains('Sony vaio i5').click()
    cy.contains('Home').click()
    cy.contains('Monitors').click()
    cy.get('#itemc').should('be.visible')


  })
}) 

