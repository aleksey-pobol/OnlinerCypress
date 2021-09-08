export class CatalogPage{
       
    verifyCatalogSections(){        
        cy.fixture('config').as('config').then((config) => {                      
            config.catalogSections.forEach((element, index, array) => {                
                cy.get('[class*=item-title-wrapper]').each( (listItem) => {
                    let itemText = listItem.text()
                    cy.log(itemText)
                    cy.log(`${element}`)
                    cy.pause()                         
                    if(cy.wrap(itemText).should('equal', `${element}`)){
                        itemText++
                        return false
                    }                     
                })
                if(index == array.length){
                    return false
                }
            });
        })         
    }

    selectSectionFromCatalogCategories(mainCategorie, subCategories, section){
        cy.get('[class*=item-title-wrapper]').contains(mainCategorie).click()
        cy.get('[class*=aside-title]').contains(subCategories).click()
        cy.get('[class*=dropdown-title]').contains(section).click()  

        cy.get('h1[class=schema-header__title]').then((header) =>{
            expect(header.text().includes(section)).to.be.true
        })
    }

    openItemPageByItemIndex(itemIndex){
        cy.get('.schema-product__group').eq(itemIndex).find('[class*=schema-product__title ]:first-child').click()
        
        cy.get('//h3[class=product-specs__title]').then((header) =>{
            expect(header.text().includes('Описание')).to.be.true
        })
    }
}


export const catalogPage = new CatalogPage()