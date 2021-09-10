/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { catalogPage } from "../support/pages/catalogPage"
import { itemPage } from "../support/pages/itemPage"
import { comparePopup } from "../support/pages/popups/comparePopup"
import { comparePage } from "../support/pages/comparePage"

describe("ComparisonFunctionality", () => {
    const mainCategorieName = 'Электроника'
    const subCategoriesName = 'Телевидение и видео'
    const sectionName = 'Телевизоры'

    beforeEach(() => {
        cy.loginToApp()
    })

    it("Verifying comparison of two items", () => {
        mainPage.openCatalogPage()
        catalogPage.selectSectionFromCatalogCategories(mainCategorieName, subCategoriesName, sectionName)        
        catalogPage.getItemNameByItemIndex(0)        
        cy.get('@itemName').as('firstComparedItemName')        
        catalogPage.openItemPageByItemIndex(0)
        itemPage.addItemToCompare()
        cy.go('back')
        catalogPage.getItemNameByItemIndex(1)
        cy.get('@itemName').as('secondComparedItemName')        
        catalogPage.openItemPageByItemIndex(1)
        itemPage.addItemToCompare()
        comparePopup.clickCompareItems(2)          
        cy.get('@firstComparedItemName').then(firstComparedItemName => {
            cy.get('@secondComparedItemName').then(secondComparedItemName => {                
                comparePage.verifyComparedItems([firstComparedItemName, secondComparedItemName])
            })
        })
        comparePage.confirmDifferingCharacteristicsAreHighlighted()
    })

    after(() => {        
        cy.go('back')
        comparePopup.removeItemsFromComparison()
    })
});