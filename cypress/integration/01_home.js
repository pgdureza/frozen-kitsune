context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Titlebar', () => {
    it('is Frozen Kitsune App', () => {
      cy.title().should('equal', 'Frozen Kitsune App')
    })
  })

  describe('Layout', () => {
    it('contains footer', () => {
      cy.get('[data-cy-element="footer"]').should('exist')
    })
    it('contains sidebar', () => {
      cy.get('[data-cy-element="sidebar"]').should('exist')
    })
  })

  describe('Redirecting to /', () => {
    it('redirects to home', () => {
      cy.url().should('include', `/home`)
    })
  })
})
