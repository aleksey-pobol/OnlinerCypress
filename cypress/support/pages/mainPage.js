export class MainPage{   

    openLoginPage(){
        cy.get('#userbar').contains('Вход').click()
    }

    confirmUserLoginSuccessfully(){
        cy.get('.b-top-profile__preview').find('div').should('have.class','js-header-user-avatar')
    }

    searchItem(item){
        cy.get('.fast-search__input').should('be.visible').type(' ')
        cy.enter('.modal-iframe').then( irfame => {
            irfame().find('.search__input').type(item) 
            irfame().find('.product__title-link').each( (listItem) => {
                const itemText = listItem.text().substr(0, 27)

                cy.wrap(itemText).should('equal', 'Ноутбук Lenovo ThinkPad T14')   
            })
        })
    }
}

export const mainPage = new MainPage()