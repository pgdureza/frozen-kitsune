context('Visitor Listing Sort', () => {
  beforeEach(() => {
    cy.visit('/visitors/This%20Month')
    cy.clock(new Date(2019, 7, 15).getTime())
  })

  describe('sorting order', () => {
    it('adds a query string order=asc when clicked', () => {
      cy.url().should('not.include', `order=asc`)
      cy.get('[data-cy-element="sort-order-toggle"]').click()
      cy.url().should('include', `order=asc`)
    })
    it('reverses the table order when clicked', () => {
      cy.get('[data-cy-element="visitor-date"]')
        .first()
        .contains('2019 Aug 14')
      cy.get('[data-cy-element="sort-order-toggle"]').click()
      cy.get('[data-cy-element="visitor-date"]')
        .first()
        .contains('2019 Aug 01')
    })
  })

  describe('sorty by', () => {
    it('adds a query string to the url for sort', () => {
      cy.url().should('not.include', `sort=`)
      cy.get('[data-cy-element="sort-selection"]').click()
      cy.get('[data-cy-element="sort-selection-device"]').click()
      cy.url().should('include', `sort=`)
    })

    describe('device', () => {
      it('changes the table entry order based on selected', () => {
        cy.get('[data-cy-element="visitor-device"]')
          .first()
          .contains('Mozilla/5.0 (Windows; U; Windows NT 6.1; ko-KR) AppleWebKit/533.20.25')
        cy.get('[data-cy-element="sort-selection"]').click()
        cy.get('[data-cy-element="sort-selection-device"]').click()
        cy.get('[data-cy-element="visitor-device"]')
          .first()
          .contains('Mozilla/5.0 Slackware/13.37')
        cy.get('[data-cy-element="sort-order-toggle"]').click({ force: true })
        cy.get('[data-cy-element="visitor-device"]')
          .first()
          .contains('Googlebot/2.1 (+http://www.googlebot.com/bot.html)')
      })
    })

    describe('ip_address', () => {
      it('changes the table entry order based on selected', () => {
        cy.get('[data-cy-element="visitor-ip-address"]')
          .first()
          .contains('242.234.77.41')
        cy.get('[data-cy-element="sort-selection"]').click()
        cy.get('[data-cy-element="sort-selection-device"]').click()
        cy.get('[data-cy-element="visitor-ip-address"]')
          .first()
          .contains('203.188.202.118')
        cy.get('[data-cy-element="sort-order-toggle"]').click({ force: true })
        cy.get('[data-cy-element="visitor-ip-address"]')
          .first()
          .contains('175.59.84.152')
      })
    })
  })
})
