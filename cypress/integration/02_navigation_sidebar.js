context('Navigation Sidebar', () => {
  beforeEach(() => {
    cy.visit('/visitors')
    cy.clock(new Date(2019, 7, 15).getTime())
  })

  describe('Today link', () => {
    it('redirects to /visitors/Today', () => {
      cy.get('[data-cy-element="link-Today"]').click({ force: true })
      cy.url().should('include', `/visitors/Today`)
    })
    it('displays a list of table entries for Aug 15, 2019', () => {
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 15')
    })
  })

  describe('Yesterday link', () => {
    it('redirects to /visitors/Yesterday', () => {
      cy.get('[data-cy-element="link-Yesterday"]').click({ force: true })
      cy.url().should('include', `/visitors/Yesterday`)
    })
    it('displays a list of table entries for Aug 14, 2019', () => {
      cy.visit('/visitors/Yesterday')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 14')
    })
  })

  describe('Last week link', () => {
    it('redirects to /visitors/Last%20Week', () => {
      cy.get('[data-cy-element="link-Last Week"]').click({ force: true })
      cy.url().should('include', `/visitors/Last%20Week`)
    })
    it('displays a list of table entries for Aug 2019', () => {
      cy.visit('/visitors/Last%20Week')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 10')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 11')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 12')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 13')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug 14')
    })
  })

  describe('This month link', () => {
    it('redirects to /visitors/This%20Month', () => {
      cy.get('[data-cy-element="link-This Month"]').click({ force: true })
      cy.url().should('include', `/visitors/This%20Month`)
    })
    it('displays a list of table entries for Aug 2019', () => {
      cy.visit('/visitors/This%20Month')
      cy.get('[data-cy-element="visitor-date"]').contains('2019 Aug')
    })
  })
})
