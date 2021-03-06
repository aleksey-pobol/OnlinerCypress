export class ItemPage{   

    addItemToCompare(){
        cy.get('#product-compare-control').contains('Добавить к сравнению').click()
    }
    
    openAllOffers(){
        cy.get('.button_orange').contains('Все предложения').click()
    }

    addItemToCartBySellerIndex(sellerIndex){
        cy.get('.offers-list__item').eq(sellerIndex).then(offer => {
            cy.wrap(offer).find('.offers-list__button_cart').last().click()
        })        
    }

    openCartPage(){
        cy.get('#cart-desktop').scrollIntoView().click()
    }
}

export const itemPage = new ItemPage()