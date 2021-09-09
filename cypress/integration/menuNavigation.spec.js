/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { catalogPage } from "../support/pages/catalogPage"

describe("MenuFunctionality", () => {
    beforeEach(() => {        
        cy.loginToApp()
    })

    it("Verifying catalog page", () => {
        mainPage.openCatalogPage()
        catalogPage.confirmCatalogSectionsExist()
    })
});