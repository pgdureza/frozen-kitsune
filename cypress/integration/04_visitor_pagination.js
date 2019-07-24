context('Visitor Listing Pagination', () => {
  beforeEach(() => {
    cy.visit('/visitors/This%20Month')
    cy.clock(new Date(2019, 7, 15).getTime())
  })

  describe('previous button', () => {
    it('is disabled on page 1', () => {
      cy.get('[data-cy-element="pagination-previous"]')
        .first()
        .click()
      cy.url().should('not.include', `page=`)
    })
    it('decreases the page number when clicked', () => {
      cy.visit('/visitors/This%20Month?page=4')
      cy.get('[data-cy-element="pagination-previous"]')
        .first()
        .click()
      cy.url().should('include', `page=3`)
    })
  })

  describe('next button', () => {
    it('is disabled on last page', () => {
      cy.visit('/visitors/This%20Month?page=5')
      cy.get('[data-cy-element="pagination-next"]')
        .first()
        .click()
      cy.url().should('not.include', `page=6`)
    })
    it('increases the page number when clicked', () => {
      cy.visit('/visitors/This%20Month?page=4')
      cy.get('[data-cy-element="pagination-next"]')
        .first()
        .click()
      cy.url().should('include', `page=5`)
    })
  })
})
