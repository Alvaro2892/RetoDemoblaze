import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('el usuario navega a la pagina de gestion de categorias de productos', () => 
    {
      cy.navigateToProductCategories()
    }
)

When('el usuario agrega articulos de cada categoria', () => 
  {
    cy.addItemsToCart()
  
})

Then('las siguientes categorias deberian mostrarse en la pagina', (dataTable) => 
  {
    cy.verifyCategoriesVisible(dataTable)
  })
