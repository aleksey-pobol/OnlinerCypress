export class CheckoutPage{   

    confirmCheckoutPageOpened(){
        cy.get('.cart-form__button_responsive').contains('Перейти к способу оплаты').should('be.visible')
    }
}

export const checkoutPage = new CheckoutPage()