describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it("should have a button", () => {
cy.get("button").contains("hämta").should("exist")
  });
});