import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
  })


beforeEach(function () {
    cy.visit('https://amcomtesteqa.z15.web.core.windows.net/')
});

/*Cenario01*/
Given(/^que o usuário está na tela do formulário 3$/, () => {
	cy.contains('div[class="card-header"]','Formulário 1')
		.should('have.text','Formulário 1')
});


When(/^a hora atual está entre 00:00h$/, () => {
		
	cy.clock(new Date(2023, 8, 21, 0, 0))

	cy.clock().then((clock1) => {
  
  	const currentTime = clock1.now

	console.log(currentTime)
	
	})
});

Then(/^a mesagem de saudação deve aparecer como Bom dia$/, () => {
	const stub = cy.stub()
  	cy.on('window:alert', stub)
	  cy.get('input[value="Saudação"]')
	  .trigger('click')
	  .then(() => {
		   expect(stub).to.be.calledWith('Bom dia')
		})
});

/*Cenario02*/
When(/^a hora atual está entre 11:59h$/, () => {
		
	cy.clock(new Date(2023, 8, 21, 11, 59))

	cy.clock().then((clock1) => {
  
  	const currentTime = clock1.now

	console.log(currentTime)
	
	})
});

/*Cenario03*/
When(/^a hora atual está entre 12:00h$/, () => {
		
	cy.clock(new Date(2023, 8, 21, 12, 0))

	cy.clock().then((clock1) => {
  
  	const currentTime = clock1.now

	console.log(currentTime)
	
	})
});

Then(/^a mesagem de saudação deve aparecer como Boa tarde$/, () => {
	const stub = cy.stub()
  	cy.on('window:alert', stub)
	  cy.get('input[value="Saudação"]')
	  .trigger('click')
	  .then(() => {
		   expect(stub).to.be.calledWith('Boa tarde')
		})
});

/*Cenario04*/
When(/^a hora atual está entre 17:59h$/, () => {
		
	cy.clock(new Date(2023, 8, 21, 17, 59))

	cy.clock().then((clock1) => {
  
  	const currentTime = clock1.now

	console.log(currentTime)
	
	})
});

/*Cenario05*/
When(/^a hora atual está entre 18:00h$/, () => {
		
	cy.clock(new Date(2023, 8, 21, 18, 0))

	cy.clock().then((clock1) => {
  
  	const currentTime = clock1.now

	console.log(currentTime)
	
	})
});

Then(/^a mesagem de saudação deve aparecer como Boa noite$/, () => {
	const stub = cy.stub()
  	cy.on('window:alert', stub)
	  cy.get('input[value="Saudação"]')
	  .trigger('click')
	  .then(() => {
		  expect(stub).to.be.calledWith('Boa noite')
		})
});

/*Cenario06*/
When(/^a hora atual está entre 23:59h$/, () => {
		
	cy.clock(new Date(2023, 8, 21, 23, 59))

	cy.clock().then((clock1) => {
  
  	const currentTime = clock1.now

	console.log(currentTime)
	
	})
});