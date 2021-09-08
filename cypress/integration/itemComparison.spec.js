/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { catalogPage } from "../support/pages/catalogPage"
import { itemPage } from "../support/pages/itemPage"
import { comparePopup } from "../support/pages/popups/comparePopup"

describe("ComparisonFunctionality", () => {
    beforeEach(() => {        
        cy.loginToApp()
    })

    it("Verify comparison of two items", () => {
        mainPage.openCatalogPage()
        catalogPage.selectSectionFromCatalogCategories('Электроника', 'Телевидение и видео', 'Телевизоры')
        //const firstItemName = catalogPage.getItemNameByItemIndex(0)
        catalogPage.getItemNameByItemIndex(0)        
        cy.get('@itemName').then(text => {
            cy.log(text)
        })
        //cy.log(firstItemName)
        
        cy.pause()
        catalogPage.openItemPageByItemIndex(0)
        itemPage.addItemToCompare()
        cy.go('back')
        const secondItemName = catalogPage.getItemNameByItemIndex(1)
        catalogPage.openItemPageByItemIndex(1)
        itemPage.addItemToCompare()
        comparePopup.compareItems(2)
    })
});