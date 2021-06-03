import loc from '../locators'

Cypress.Commands.add('validaContaNoExtrato', (desc,valor) => {
    cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO(desc, valor)).should('exist')
})

Cypress.Commands.add('clicarAlterarMovimentacao', (nomeConta) => {
    cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO(nomeConta)).click()
})

Cypress.Commands.add('clicarDeletarMovimentacao', (nomeConta) => {
    cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO(nomeConta)).click()
})





