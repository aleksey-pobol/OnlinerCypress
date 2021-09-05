export class FastSearchPopup{   
    
    verifyFastSearchResults(itemName){        
        cy.iframe('.modal-iframe').then( iframe => {            
            cy.wrap(iframe).find('.product__title-link').each( (listItem) => {
                const itemText = listItem.text().substr(0, 27)

                cy.wrap(itemText).should('equal', `Ноутбук ${itemName}`)   
            })
        })        
    }
}

export const fastSearchPopup = new FastSearchPopup()