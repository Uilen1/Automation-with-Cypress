import loc from '../locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', conta => {
    cy.get(loc.CONTAS.NOME).type(conta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
})

Cypress.Commands.add('alterarConta', (antigoNomeConta,novoNomeConta) => {
    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR(antigoNomeConta)).click()
    cy.get(loc.CONTAS.NOME)
        .clear()
        .type(novoNomeConta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
})





