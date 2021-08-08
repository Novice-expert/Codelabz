/// <reference types="cypress" />

describe("Editor Test | CodeLabz", () => {
  beforeEach(function () {
    cy.fixture("login").then(function (credentials) {
      this.credentials = credentials;
    });
    cy.fixture("base_url").then(function (data) {
      this.base_url = data.base_url;
    });
  });
  it("login", function () {
    cy.visit(`${this.base_url}login`);
    cy.get(".email").type(this.credentials.email);
    cy.get(".password").type(this.credentials.password);
    cy.get(".loginButton").click();
    cy.wait(5000);
  });

  it("check editor user icon", function () {
    cy.visit(`${this.base_url}tutorials/rijusougata31/4tWkiS0tp8DsRM2xf9jG`);
    cy.get("#editorUser").should("not.exist");
    cy.wait(2000);
    cy.get("#editorMode").click();

    cy.get("#editorUser").should("exist");
  });
  it("check firepad exist", function () {
    cy.visit(`${this.base_url}tutorials/rijusougata31/4tWkiS0tp8DsRM2xf9jG`);
    cy.wait(2000);
    cy.get("#editorMode").click();
    cy.get("[data-testId=editorFirepad]").should("exist");
  });

  it("add image input", function () {
    cy.visit(`${this.base_url}tutorials/rijusougata31/4tWkiS0tp8DsRM2xf9jG`);
    cy.wait(2000);
    cy.get("[data-testId=tutorialImgUpload]").should("not.exist");
    cy.get("#tutorialAddImg").click();
    cy.get("[data-testId=tutorialImgUpload]").should("exist");
  });
});
