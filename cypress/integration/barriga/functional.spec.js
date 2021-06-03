/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commands/commandsContas'
import '../../support/commands/commandsHome'
import '../../support/commands/commandsMenu'
import '../../support/commands/commandsMovimentacao'
import '../../support/commands/commandsExtrato'

describe('Should test at a functional level', () => {
    before(() => {
        cy.loginFast('uilen@gmail.com', '123456')

    })

    beforeEach(() => {
        cy.resetApp()
        cy.clicarMenuHome()
    })

    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta inserida')
        cy.validaMensagem('Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.acessarMenuConta()
        cy.alterarConta('Conta para alterar','Conta alterada')
        cy.validaMensagem('Conta atualizada com sucesso')
    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta mesmo nome')
        cy.validaMensagem('code 400')
    })

    it('Should create a transaction', () => {
        cy.clicarMenuMovimentacao()
        cy.criarMovimentacao('Desc','123','inter','Conta para movimentacoes')
        cy.validaMensagem('sucesso')
        cy.validaContaNoExtrato('Desc','123')
    })

    it.only('Should get balance', () => {
        cy.validarSaldo('Conta para saldo','534,00')
        cy.clicarMenuExtrato()
        cy.clicarAlterarMovimentacao('Movimentacao 1, calculo saldo')
        cy.alterarStatusMovimentacao('Movimentacao 1, calculo saldo')
        cy.validaMensagem('sucesso')
        cy.clicarMenuHome()
        cy.validarSaldo('Conta para saldo','4.034,00')
    })

    it('Should remove a transaction', () => {
        cy.clicarMenuExtrato()
        cy.clicarDeletarMovimentacao('Movimentacao para exclusao')
        cy.validaMensagem('sucesso')
    })
})

