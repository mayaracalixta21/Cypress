/// <reference types="cypress" /> */

let login = "drnutricao"
let password = 45385244090

it("Login completo",() => {
    cy.visit('login')
    cy.get('#login-username').type(`${login}`)
    cy.get('#login-password').type(`${password}`)
    cy.get('.btn')
        .click()
})