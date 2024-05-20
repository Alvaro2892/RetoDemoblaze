Feature: Gestion de categorias de productos

  Scenario: Agregar y mostrar categorias de productos
    Given el usuario navega a la pagina de gestion de categorias de productos
    When el usuario agrega articulos de cada categoria
    Then las siguientes categorias deberian mostrarse en la pagina
        |Phones|
        |Laptops|
        |Monitors|