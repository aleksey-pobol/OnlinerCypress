/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { fastSearchPopup } from "../support/pages/fastSearchPopup"

describe("SearchFunctionality", () => {
    beforeEach(() => {
        cy.fixture('config').then(function(config) {
            this.config = config;
        })
        cy.loginToApp()
    })

    it("Verify fast search results", function(){
        mainPage.searchItem(this.config.itemName)
        fastSearchPopup.verifyFastSearchResults(this.config.itemName)        
    })
});