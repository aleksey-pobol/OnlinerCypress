export class LoginPage{   

    setEmail(email){
        cy.get('[placeholder="Ник или e-mail"]').type(email)
    }

    setPassword(password){
        cy.get('[placeholder="Пароль"]').type(password)
    }

    clickSubmitButton(){
        cy.get('button[type="submit"]').contains('Войти').click()
    }
}

export const loginPage = new LoginPage()