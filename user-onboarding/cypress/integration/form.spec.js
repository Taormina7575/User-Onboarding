

describe("Form App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it('make sure test works', () => {
        expect(1 + 1).to.equal(2)
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsInput = () => cy.get('input[name="terms"]')
    const subBtn = () => cy.get('button[id="subBtn"]')

    it('name input works', () => {
        nameInput().should('exist')
        nameInput().type('vincenzo')
        nameInput().should('have.value', 'vincenzo')
    })

    it('email input works', () => {
        emailInput().should('exist')
        emailInput().type('vincenzo@vinnie.com')
        emailInput().should('have.value', 'vincenzo@vinnie.com')
    })

    it('password input works', () => {
        passwordInput().should('exist')
        passwordInput().type('vincenzo')
        passwordInput().should('have.value', 'vincenzo')
    })

    it('terms input works', () => {
        termsInput().should('exist')
        termsInput().click()
        termsInput().should('be.checked')
    })

    it('submit button requires certain data', () => {
        subBtn().should('be.disabled')
        nameInput().type('textss')
        subBtn().should('be.disabled')
        nameInput().clear()
        emailInput().type('vincenzo@vinnie.com')
        subBtn().should('be.disabled')
        nameInput().type('textss')
        subBtn().should('be.disabled')
        nameInput().clear()
        emailInput().clear()
        passwordInput().type('textpass')
        subBtn().should('be.disabled')
        nameInput().type('textss')
        subBtn().should('be.disabled')
        emailInput().type('vincenzo@vinnie.com')
        subBtn().should('be.disabled')
        emailInput().clear()
        nameInput().clear()
        passwordInput().clear()
        termsInput().click()
        subBtn().should('be.disabled')
        nameInput().type('textss')
        subBtn().should('be.disabled')
        emailInput().type('vincenzo@vinnie.com')
        subBtn().should('be.disabled')
        passwordInput().type('textpass')
        subBtn().should('not.be.disabled')
    })

    it("can submit a new quote", () => {
        cy.contains("textss").should("not.exist");
        cy.contains("vincenzo@vinnie.com").should("not.exist");
        cy.contains("textpass").should("not.exist");
        nameInput().type("textss")
        emailInput().type("vincenzo@vinnie.com")
        passwordInput().type("textpass")
        termsInput().click()
        subBtn().click()
        cy.contains("textss").should("exist");
        cy.contains("vincenzo@vinnie.com").should("exist");
        cy.contains("textpass").should("exist");
      });


})