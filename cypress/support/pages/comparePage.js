export class ComparePage{   

    verifyComparedItems(comparedItems){
        comparedItems.forEach((item, itemCount) => {
            cy.get('.product-table__row_top').find('.product-summary__caption').eq(itemCount).should((getItemTitle) => {
                expect(getItemTitle.text()).to.equal(`${item}`)
            })
        })        
    }

    confirmDifferingCharacteristicsAreHighlighted(){        
        cy.get('.product-table__cell_accent').first().invoke('css', 'background').should('contain', 'rgb(255, 236, 196)')
    }
}

export const comparePage = new ComparePage()