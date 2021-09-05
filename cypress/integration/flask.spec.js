/// <reference types="cypress" />


context('Testing to do list', () => {
    beforeEach(() =>{
        cy.visit(Cypress.env('host'))  
        cy.get('.btn-primary').contains('Create a to-do list').click()
    })

    it('adding first task to a list', () => {
    
        cy.addTask()
        
        cy.contains('Take a shower').should('be.visible')
    })


    it('complete first task in list', () => {

        cy.addTask()

        cy.get('label[title="Done"]').click() // for dynamics selectors

        cy.get('.done').contains('Take a shower').should('have.css', 'color', 'rgb(187, 187, 187)')
    })

    it('edit task in list', () => {

        cy.addTask('Eat a pizza')
        
        cy.contains('Eat a pizza').type('Task edited')

        cy.get('#task_description').click()
                
        cy.contains('Task edited').should('be.visible')
    })

    it('delete task in list', () => {
        
        cy.addTask()

        cy.get('.delete-task').click()

        cy.contains('Take a shower').should('not.exist')
        
    })

})
