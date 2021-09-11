export class CartPage{   

    openCheckoutPageForItem(){        
        cy.get('@itemRow').find('.cart-form__button').contains('Перейти к оформлению').click()
    }

    removeItemFromCart(){        
        // Used {force: true} because trigger ('mouseover') or invoke ('show') don't work
        cy.get('@itemRow').find('.cart-form__button_remove').click({ force: true })
        cy.get('[class*=cart-form__description_condensed-extra]').then((description) => {
            expect(description.text().includes('Вы удалили')).to.be.true
        })
    }

    getItemRow(itemName){
        cy.get('.cart-form__offers-item_secondary').then((item) => {
            cy.wrap(item).get('.cart-form__description > a[href]').contains(itemName)
        })
        .parents('.cart-form__offers-unit_primary').as('itemRow')        
    }
}

export const cartPage = new CartPage()