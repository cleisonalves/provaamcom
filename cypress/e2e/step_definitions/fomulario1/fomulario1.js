import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
  })

beforeEach(function () {
    cy.visit('https://amcomtesteqa.z15.web.core.windows.net/')
});

/*Cenario01*/
Given(/^que o usuário está na tela do formulário 1$/, () => {
	cy.contains('div[class="card-header"]','Formulário 1')
		.should('have.text','Formulário 1')
});

When(/^preencher todos os dados$/, () => {
	cy.get('input[id="fname"]')
		.type("Teste")
	cy.get('input[id="lname"]')
		.type("Robo")
	cy.get('input[id="phone"]')
		.type("1212345678")
});

And (/^envia$/, () => {
	cy.get('input[value="Enviar"]')
		.trigger('click')
});

Then(/^deve aparecer o modal com a mensagem Enviado com sucesso$/, () => {
	cy.get('p')
		.should('have.text', 'Enviado com sucesso', { force:true })
});

/*Cenario02*/
When(/^preencher apenas o campo nome$/, () => {
	cy.get('input[id="fname"]')
		.type("Somente Nome")
});

/*Cenario03*/
When(/^preencher apenas o campo Sobrenome$/, () => {
	cy.get('input[id="lname"]')
		.type("Somente Sobrenome")
});

/*Cenario04*/
When(/^preencher apenas o campo Telefone$/, () => {
	cy.get('input[id="phone"]')
		.type("1211112222")
});

/*Cenario05*/
Given(/^que o modal com a mensagem Enviado com sucesso aparece para o usuário$/, () => {
	cy.get('input[id="fname"]')
		.type("Teste")
	cy.get('input[id="lname"]')
		.type("Robo")
	cy.get('input[id="phone"]')
		.type("1212345678")
	cy.get('input[value="Enviar"]')
		.trigger('click')
	cy.get('p')
		.should('have.text', 'Enviado com sucesso', { force:true })
});

When(/^o usuário fecha o modal$/, () => {
	cy.get('button[type="button"]')
		.click()
});

Then(/^o modal deve sumir da tela e permanecer na tela de formulário$/, () => {
	cy.get('button[type="button"]')
		.should('not.be.visible')
});