/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })


  it('Browser shall display the information of 10 clients', () => {
    cy.get('tbody tr').should("to.have.length", 10)
    cy.get('tbody tr td').contains("user_2")    
    cy.get('tbody tr td').contains("user_5")    
    cy.get('tbody tr td').contains("user_9")    
    cy.get('h1').contains("Alberto Rebello")    
    cy.get('body p').contains("Welcome")    
  })
})
   
    
   