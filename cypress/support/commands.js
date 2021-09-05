import 'cypress-iframe';
import { loginPage } from "../support/pages/loginPage"
import { mainPage } from "../support/pages/mainPage"


Cypress.Commands.add('openMainPage', () => {
    cy.visit('/')    
})

Cypress.Commands.add('loginToApp', () =>{
    cy.openMainPage()
    mainPage.openLoginPage()
    cy.fixture('config').as('config').then((config) => {
      loginPage.setEmail(config.email)
      loginPage.setPassword(config.password)      
    })    
    loginPage.clickSubmitButton()
})

Cypress.Commands.add('switchToElement', { prevSubject: 'element' }, ($iframe, selector) => {
  Cypress.log({
    name: 'iframe',
    consoleProps() {
      return {
        iframe: $iframe,
      };
    },
  });
  return new Cypress.Promise(resolve => {
    resolve($iframe.contents().find(selector));
  });
});