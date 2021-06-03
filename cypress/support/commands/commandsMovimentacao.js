import loc from '../locators'

Cypress.Commands.add('criarMovimentacao', (descricao,valor,interessado,conta) => {
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type(descricao)
    cy.get(loc.MOVIMENTACAO.VALOR).type(valor)
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type(interessado)
    cy.get(loc.MOVIMENTACAO.CONTA).select(conta)
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
})

Cypress.Commands.add('alterarStatusMovimentacao', (nomeDesc) => {
    cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', nomeDesc )
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
})



