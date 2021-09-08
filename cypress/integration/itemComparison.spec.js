/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { catalogPage } from "../support/pages/catalogPage"
import { itemPage } from "../support/pages/itemPage"
import { comparePopup } from "../support/pages/comparePopup"

describe("ComparisonFunctionality", () => {
    beforeEach(() => {        
        cy.loginToApp()
    })

    it("Verify comparison of two products", () => {
        mainPage.openCatalogPage()
        catalogPage.selectSectionFromCatalogCategories('Электроника', 'Телевидение и видео', 'Телевизоры')
        catalogPage.openItemPageByItemIndex(0)
        itemPage.addItemToCompare()
        cy.go('back')
        catalogPage.openItemPageByItemIndex(1)
        itemPage.addItemToCompare()
        comparePopup.compareItems(2)
    })
});