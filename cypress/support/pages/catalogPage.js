export class CatalogPage{   
    
    verifyCatalogSections(){     
        let test = cy.get('.catalog-navigation-classifier').find('data-id')
        cy.log(test)
        cy.pause()  
        /* cy.fixture('config').as('config').then((config) => {
            config.catalogSections.array.forEach(element => {
                let test = cy.get('.catalog-navigation-classifier_active').find('data-id')
                cy.pause()
                cy.get('.catalog-navigation-classifier_active').find('data-id').each( (listItem) => {
                    let itemText = cy.wrap(listItem)
        
                    //cy.wrap(itemText).should('equal', `Ноутбук ${itemName}`)   
                })
            });
        }) */
    }
}

export const catalogPage = new CatalogPage()