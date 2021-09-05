/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"

describe("BaseFunctionality", () => {
    beforeEach(() => {        
        cy.loginToApp()
    })

    it("Verify user login successfully", () =>{
        mainPage.confirmUserLoginSuccessfully()
    })
});