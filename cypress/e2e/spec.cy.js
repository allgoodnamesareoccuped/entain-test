const GREYHOUND = 'Greyhound'
const HARNESS = 'Harness'
const THOROUGHBRED = 'Thoroughbred'
describe('entain tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('should always show 5 races ', () => {
    cy.get('h3').should('have.length', 5)
  })
  it('every race should contain heder, race number and countdown', () => {
    cy.get('div.race-summary.v-card.v-sheet.theme--light').within(() => {
      cy.get('h3').should('exist')
      cy.get('p').should('exist')
      cy.get('p').should('contain.text', 'Race')
      cy.get('p').eq(1).should('exist')
      cy.get('p').eq(1).should('contain.text', 'm')
      cy.get('p').eq(1).should('contain.text', 's')
      
    // Should check that the minute value is in range <10 and < -1
    })
  })
  it('should not show Greayhound if not selected', () => {
    cy.findByText(GREYHOUND).click().should('not.be.checked')
    cy.get('h3').should('not.contain.text', GREYHOUND)

    //Cleanup
    cy.findByText(GREYHOUND).click()
  })
  it('should not show Harness if not selected', () => {
    cy.findByText(HARNESS).click()
    cy.get('h3').should('not.contain.text', HARNESS)
    cy.findByText(HARNESS).click()
  })
  it('should not show Thoroughbred if not selected', () => {
    cy.findByText(THOROUGHBRED).click()
    cy.get('h3').should('not.contain.text', THOROUGHBRED)
    cy.findByText(THOROUGHBRED).click()
  })
  it('should only show selected categories', () => {
    cy.findByText(GREYHOUND).click().should('not.be.checked')
    cy.findByText(HARNESS).click().should('not.be.checked')
    cy.get('h3').should('contain.text', THOROUGHBRED)
    cy.findByText(GREYHOUND).click()
    cy.findByText(HARNESS).click()
  })
  it('should not show any races if no checkboxes are clicked', () => {
    cy.findByText(GREYHOUND).click().should('not.be.checked')
    cy.findByText(HARNESS).click().should('not.be.checked')
    cy.findByText(THOROUGHBRED).click().should('not.be.checked')
    cy.get('h3').should('have.length', 0)
    cy.findByText(GREYHOUND).click()
    cy.findByText(HARNESS).click()
    cy.findByText(THOROUGHBRED).click()
  })
})
