import loc from '../locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('clicarMenuHome', () => {
    cy.get(loc.MENU.HOME).click()
})

Cypress.Commands.add('clicarMenuMovimentacao', () => {
    cy.get(loc.MENU.MOVIMENTACAO).click();
})

Cypress.Commands.add('clicarMenuExtrato', () => {
    cy.get(loc.MENU.EXTRATO).click()
})





