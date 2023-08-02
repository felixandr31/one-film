describe('should display result when typing on searuch input', () => {
    it('should display "dexter" when typing "dexter" on search input', () => {
      cy.get('http://127.0.0.1:5173/')
      cy.get("#input-serie").type('dexter')
    })
})