import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
  })

beforeEach(function () {
    cy.visit('https://amcomtesteqa.z15.web.core.windows.net/')
});

/*Cenario01*/
Given(/^que o usuário está na tela do formulário 2$/, () => {
	cy.contains('div[class="card-header"]','Formulário 2')
		.should('have.text','Formulário 2')
});

When(/^seleciona a cor azul$/, () => {
	cy.get('select[id="colors"]')
		.select('Azul')
		.should('have.value', 'blue')
});

Then(/^o formulario deve ficar com o background azul$/, () => {
	cy.get('div[id="card-color"]')
		.should('have.css', 'background-color', 'rgb(0, 0, 255)')
});

/*Cenario02*/
When(/^seleciona a cor amarelo$/, () => {
	cy.get('select[id="colors"]')
		.select('Amarelo')
		.should('have.value', 'yellow')
});

Then(/^o formulario deve ficar com o background amarelo$/, () => {
	cy.get('div[id="card-color"]')
		.should('have.css', 'background-color', 'rgb(255, 255, 0)')
});

/*Cenario03*/
When(/^seleciona a cor vermelho$/, () => {
	cy.get('select[id="colors"]')
		.select('Vermelho')
		.should('have.value', 'red')
});

Then(/^o formulario deve ficar com o background vermelho$/, () => {
	cy.get('div[id="card-color"]')
		.should('have.css', 'background-color', 'rgb(255, 0, 0)')
});
