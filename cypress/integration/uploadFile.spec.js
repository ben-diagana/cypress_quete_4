describe('upload file to website', () => {
    beforeEach(() => {
        cy.visit('https://imgur.com/upload')
    }) 

    it('should file to website', () => {
        cy.get('#file-input').attachFile('lion.jpg')
        cy.get('.Toast-message').should('contain.text', 'Upload Complete')
        //cy.get('.PostContent-imageWrapper-rounded').contains('lion.jpg')

    })
})