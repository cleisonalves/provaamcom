Feature: Formulário 2

    Formulário 2 - Seleção de Cor:Um usuário deve ser capaz de selecionar uma cor azul, amarelo, vermelho de um combo box. Ao selecionar uma cor, o fundo do formulário deve mudar para a cor selecionada.

Scenario: 01-[Formulário2] Escolher background azul

Given que o usuário está na tela do formulário 2
When seleciona a cor azul
Then o formulario deve ficar com o background azul

Scenario: 02-[Formulário2] Escolher background amarelo

Given que o usuário está na tela do formulário 2
When seleciona a cor amarelo
Then o formulario deve ficar com o background amarelo

Scenario: 03-[Formulário2] Escolher background vermelho

Given que o usuário está na tela do formulário 2
When seleciona a cor vermelho
Then o formulario deve ficar com o background vermelho