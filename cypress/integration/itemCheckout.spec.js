/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import { mainPage } from "../support/pages/mainPage"
import { fastSearchPopup } from "../support/pages/popups/fastSearchPopup"
import { itemPage } from "../support/pages/itemPage"
import { cartPage } from "../support/pages/cartPage"
import { checkoutPage } from "../support/pages/checkoutPage"

describe("CheckoutFunctionality", () => {
    let laptopModel = 'T14 Gen 1 20S0000SRT'
    beforeEach(() => {
        cy.fixture('config').then(function(config) {
            this.config = config;
        })
        cy.loginToApp()
    })

    it("Verifying checkout ", function() {
        const fullItemName = `${this.config.itemName} ${laptopModel}`
        
        mainPage.searchItem(fullItemName)
        fastSearchPopup.openItemPage(fullItemName)
        itemPage.openAllOffers()
        itemPage.addItemToCartBySellerIndex(2)
        itemPage.openCartPage()
        cartPage.openCheckoutPage()
        checkoutPage.confirmCheckoutPageOpened()
    })
});