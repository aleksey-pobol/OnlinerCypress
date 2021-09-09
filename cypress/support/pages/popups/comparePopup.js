export class ComparePopup{   

    clickCompareItems(countOfComparedItems){
        cy.get('#compare-button-container').first().find('[class*=compare-button__sub_main]').as('compareButton')
        cy.get('@compareButton').children().should('contain', `${countOfComparedItems}`).and('contain', 'товара')
        cy.get('@compareButton').should('contain', 'в').and('contain', 'сравнении')
        cy.get('@compareButton').click()
    }
    
    removeItemsFromComparison(){
        cy.get('span[class*=compare-button__icon_trash]').click()
        cy.contains('Очистить список сравнения').should('be.visible').click()
    }
}

export const comparePopup = new ComparePopup()