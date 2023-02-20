#language: pt
#encoding: utf-8

@test
  Funcionalidade: Realizar compra no E-commerce

    Como um comprador
    Quero ver a lista de produtos disponiveis
    Para que eu possa escolher qual devo comprar

    Cenario: Adicionar produto no carrinho
      Dado que um usuario acessa o site "https://www.saucedemo.com/"
      E acessa o sistema com usuário e senha
      Quando entrar na tela inicial adciciona o produto "Sauce Labs Backpack"
      Entao o produto "Sauce Labs Backpack" deve estar presente no carrinho

