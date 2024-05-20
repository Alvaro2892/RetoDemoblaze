Feature: Compra completa de productos

  Scenario: Agregar un producto al carrito de compras y efectuar la compra
    Given el usuario navega a la pagina de gestion de categorias de productos
    When el usuario agrega articulos al carrito de compra y luego realiza la compra
    Then debe mostrarse el siguiente mensaje de finalizacion