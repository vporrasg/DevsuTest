const Purchase_data = require('../fixtures/data.json')

describe('Devsu test', () => {
  it('Demoblaze Buy 2 items', () => {
    cy.visit('https://demoblaze.com/')
    //Selecciona item 1
    cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
    //Click en boton add to cart
    cy.get('#tbodyid > div.row > div > .btn').click()
    //Navega a home
    cy.get(':nth-child(1) > .nav-link').click()
    //Selecciona item 2
    cy.get('#tbodyid > div:nth-child(2) > div > div > h4 > a').click()
    //Click en boton add to cart
    cy.get('#tbodyid > div.row > div > .btn').click()
    //Navega al carrito
    cy.get(':nth-child(4) > .nav-link').click()
    //Se da click en boton Place Order
    cy.get('#page-wrapper > div > div.col-lg-1 > button').click()
    
    //Fill purchase form
    cy.get('#name').type(Purchase_data.name)
    cy.get('#country').type(Purchase_data.country)
    cy.get('#city').type(Purchase_data.city)
    cy.get('#card').type(Purchase_data.card)
    cy.get('#month').type(Purchase_data.month)
    cy.get('#year').type(Purchase_data.year)

    //Se da click en boton de comprar
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    //Se verifica que la alerta de la compra exitosa sea visible
    cy.get('body > div.sweet-alert.showSweetAlert.visible > h2').should('be.visible')
    //Se verifica el texto de compra exitosa
    cy.get('body > div.sweet-alert.showSweetAlert.visible > h2').should('have.text', 'Thank you for your purchase!')
  })
})