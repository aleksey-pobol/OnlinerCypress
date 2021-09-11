/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { fastSearchPopup } from "../support/pages/popups/fastSearchPopup"
import { itemPage } from "../support/pages/itemPage"
import { cartPage } from "../support/pages/cartPage"
import { checkoutPage } from "../support/pages/checkoutPage"

describe("CheckoutFunctionality", () => {    
    beforeEach(() => {        
        cy.fixture('config.json').as('config')
        cy.loginToApp()
    })    

    it("Verifying checkout ", function() {       
        mainPage.searchItem(this.config.fullItemName)
        fastSearchPopup.openItemPage(this.config.fullItemName)
        itemPage.openAllOffers()
        itemPage.addItemToCartBySellerIndex(2)        
        itemPage.openCartPage()
        cartPage.getItemRow(this.config.fullItemName)
        cartPage.openCheckoutPageForItem()        
        checkoutPage.confirmCheckoutPageOpened()
    })

    after(function() {
        cy.go('back')
        cartPage.getItemRow(this.config.fullItemName)
        cartPage.removeItemFromCart()
        
    })
});