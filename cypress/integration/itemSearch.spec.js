/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { fastSearchPopup } from "../support/pages/fastSearchPopup"

describe("SearchFunctionality", () => {
    beforeEach(() => {        
        cy.loginToApp()
    })

    it("Verify fast search results", () =>{   
        cy.fixture('config').as('config').then((config) => {
            mainPage.searchItem(config.itemName)
            fastSearchPopup.verifyFastSearchResults(config.itemName)
        })          
    })
});