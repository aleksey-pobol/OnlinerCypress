export class CatalogPage{
       
    verifyCatalogSections(){        
        cy.fixture('config').as('config').then((config) => {                      
            config.catalogSections.forEach((element, item) => {
                cy.get('[class*=item-title-wrapper]').eq(item).should((title) => {
                    const text = title.text().replace(/\s+/g, '')
                    expect(text).to.equal(`${element}`)                               
                })                          
            });
        })         
    }

    selectSectionFromCatalogCategories(mainCategorie, subCategories, section){
        cy.get('[class*=item-title-wrapper]').contains(mainCategorie).first().click()
        cy.get('[class*=aside-title]').contains(subCategories).first().click()
        cy.get('[class*=dropdown-title]').contains(section).first().click()  

        /* cy.get('h1[class=schema-header__title]').then((header) =>{
            expect(header.text().includes(section)).to.be.true
        }) */
    }

    openItemPageByItemIndex(itemIndex){
        cy.get('.schema-product__group').eq(itemIndex).find('[class*=schema-product__title]:first-child').click('left')
        
        cy.get('.product-specs__title').then((header) =>{
            expect(header.text().includes('Описание')).to.be.true
        })
    }

    getItemNameByItemIndex(itemIndex){
        cy.get('.schema-product__group').eq(itemIndex).find('[class*=schema-product__title]:first-child span').then((item) =>{
            const ItemName = item.text()
            cy.wrap(ItemName).as('itemName')
        })
    }
}


export const catalogPage = new CatalogPage()