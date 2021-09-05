/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"

describe("SearchFunctionality", () => {
    beforeEach(() => {        
        cy.loginToApp()
    })

    it("Verify user login successfully", () =>{   
        cy.fixture('config').as('config').then((config) => {
            mainPage.searchItem(config.itemName)
        })          
    })
});