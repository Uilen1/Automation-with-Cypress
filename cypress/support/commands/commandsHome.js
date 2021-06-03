import loc from '../locators'

Cypress.Commands.add('validarSaldo', (nomeConta,valor) => {
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA(nomeConta)).should('contain', valor)
})

