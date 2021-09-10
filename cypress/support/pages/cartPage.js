export class CartPage{   

    openCheckoutPage(){
        cy.get('.cart-form__button').contains('Перейти к оформлению').click()
    }
}

export const cartPage = new CartPage()