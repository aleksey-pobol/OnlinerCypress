export class ComparePopup{   

    compareItems(itemsCount){
        cy.get('#compare-button-container').first().find('[class*=compare-button__sub_main]').as('compareButton')
        cy.get('@compareButton').children().should('contain', `${itemsCount} товара`).click();
    }    
}

export const comparePopup = new ComparePopup()