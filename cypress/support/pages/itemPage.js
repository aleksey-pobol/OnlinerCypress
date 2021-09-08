export class ItemPage{   

    addItemToCompare(){
        cy.get('#product-compare-control').contains('Добавить к сравнению').click()
    }    
}

export const itemPage = new ItemPage()