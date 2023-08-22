Feature: Formulário 1

    Formulário 1 - Submissão de Dados:Um usuário deve poder preencher o nome, sobrenome e telefone e clicar no botão 'Enviar'. Isso deve abrir um modal com a mensagem "Enviado com sucesso". O usuário deve ser capaz de fechar o modal clicando no botão de fechar.

Scenario: 01-[Formulário1]Enviar o formulario com os dados completos

Given que o usuário está na tela do formulário 1
When preencher todos os dados
And envia
Then deve aparecer o modal com a mensagem Enviado com sucesso

Scenario: 02-[Formulário1]Enviar apenas com o nome preenchido

Given que o usuário está na tela do formulário 1
When preencher apenas o campo nome
And envia
Then deve aparecer o modal com a mensagem Enviado com sucesso

Scenario: 03-[Formulário1]Enviar apenas com o Sobrenome preenchido

Given que o usuário está na tela do formulário 1
When preencher apenas o campo Sobrenome
And envia
Then deve aparecer o modal com a mensagem Enviado com sucesso

Scenario: 04-[Formulário1]Enviar apenas com o Telefone preenchido

Given que o usuário está na tela do formulário 1
When preencher apenas o campo Telefone
And envia
Then deve aparecer o modal com a mensagem Enviado com sucesso

Scenario: 05-[Formulário1]Fechar a mensagem do modal

Given que o modal com a mensagem Enviado com sucesso aparece para o usuário
When o usuário fecha o modal
Then o modal deve sumir da tela e permanecer na tela de formulário