export class FastSearchPopup{   
    
    verifyFastSearchResults(itemName){        
        cy.iframe('.modal-iframe').then( iframe => {            
            cy.wrap(iframe).find('.product__title-link').each( (listItem) => {
                let itemText = listItem.text().substr(0, 27)

                cy.wrap(itemText).should('equal', `Ноутбук ${itemName}`)   
            })
        })        
    }

    openItemPage(itemName){        
        cy.iframe('.modal-iframe').then( iframe => {            
            cy.wrap(iframe).find('.product__title-link').should('contain', itemName).click()
        })
    }
}

export const fastSearchPopup = new FastSearchPopup()