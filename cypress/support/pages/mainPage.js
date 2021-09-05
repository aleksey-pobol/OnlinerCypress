export class MainPage{   

    openLoginPage(){
        cy.get('#userbar').contains('Вход').click()
    }

    confirmUserLoginSuccessfully(){
        cy.get('.b-top-profile__preview').find('div').should('have.class','js-header-user-avatar')
    }

    searchItem(itemName){
        cy.get('.fast-search__input').should('be.visible').type(' ')
        cy.enter('.modal-iframe').then( irfame => {
            irfame().find('.search__input').type(itemName)             
        })
    }
}

export const mainPage = new MainPage()