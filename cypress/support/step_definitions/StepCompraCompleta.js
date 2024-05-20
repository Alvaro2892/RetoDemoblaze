import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('el usuario navega a la pagina de gestion de categorias de productos', () => 
    {
      cy.navigateToProductCategories()
    }
)

When('el usuario agrega articulos al carrito de compra y luego realiza la compra', () => 
  {
    cy.addItemsToCartandBuy()
  
})

Then('debe mostrarse el siguiente mensaje de finalizacion', (dataTable) => 
  {
    cy.verifyThankYouMessage()
  })