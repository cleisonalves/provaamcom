Feature: Formulário 2

    Formulário 3 - Mensagem de Horário:Um usuário deve ser capaz de clicar em um botão que exibe uma mensagem de saudação dependendo da hora do dia. Antes do meio-dia, deve mostrar Bom dia. Após o meio-dia, mas antes das 18:00, deve mostrar Boa tarde. Após as 18:00, deve mostrar Boa noite.

Scenario: 01-[Formulário3] Verificar a saudação de Bom dia no horario 00:00

Given que o usuário está na tela do formulário 3
When a hora atual está entre 00:00h
Then a mesagem de saudação deve aparecer como Bom dia

Scenario: 02-[Formulário3] Verificar a saudação de Bom dia no horario 11:59

Given que o usuário está na tela do formulário 3
When a hora atual está entre 11:59h
Then a mesagem de saudação deve aparecer como Bom dia

Scenario: 03-[Formulário3] Verificar a saudação de Bom dia no horario 12:00

Given que o usuário está na tela do formulário 3
When a hora atual está entre 12:00h
Then a mesagem de saudação deve aparecer como Boa tarde

Scenario: 04-[Formulário3] Verificar a saudação de Bom dia no horario 17:59

Given que o usuário está na tela do formulário 3
When a hora atual está entre 17:59h
Then a mesagem de saudação deve aparecer como Boa tarde

Scenario: 05-[Formulário3] Verificar a saudação de Bom dia no horario 18:00

Given que o usuário está na tela do formulário 3
When a hora atual está entre 18:00h
Then a mesagem de saudação deve aparecer como Boa noite

Scenario: 06-[Formulário3] Verificar a saudação de Bom dia no horario 23:59

Given que o usuário está na tela do formulário 3
When a hora atual está entre 23:59h
Then a mesagem de saudação deve aparecer como Boa noite