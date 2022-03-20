/// <reference types="cypress" />

let login = "drnutricao"
let password = 45385244090

Given("o usuario está na tela de login",() => {
    cy.visit('login')
});

When("informar o login e senha",() => {
    cy.get('#login-username').type(`${login}`)
    cy.get('#login-password').type(`${password}`)
});

And("clicar no botão salvar",() => {
    cy.get('.btn').click()
})
