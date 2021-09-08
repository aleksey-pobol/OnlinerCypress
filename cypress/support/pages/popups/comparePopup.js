export class ComparePopup{   

    compareItems(itemsCount){
        cy.get('#compare-button-container').first().find('[class*=compare-button__sub_main]').as('compareButton')
        cy.get('@compareButton').children().should('contain', `${itemsCount}`).and('contain', 'товара')
        cy.get('@compareButton').should('contain', 'в').and('contain', 'сравнении')
        cy.get('@compareButton').click()
    }    
}

export const comparePopup = new ComparePopup()