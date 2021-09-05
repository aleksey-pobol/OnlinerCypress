export class MainPage{   

    openLoginPage(){
        cy.get('#userbar').contains('Вход').click()
    }

    confirmUserLoginSuccessfully(){
        cy.get('.b-top-profile__preview').find('div').should('have.class','js-header-user-avatar')
    }

    searchItem(item){
        cy.get('.fast-search__input').should('be.visible').type(item)        
        cy.iframe('.modal-iframe').then( iframe => {
            cy.wrap(iframe).find('.search__input').click()
            cy.wrap(iframe).find('.product__title-link').each( (listItem) => {
                const itemText = listItem.text().substr(0, 27)

                cy.wrap(itemText).should('equal', 'Ноутбук Lenovo ThinkPad T14')
            })
        })
    }
}

export const mainPage = new MainPage()