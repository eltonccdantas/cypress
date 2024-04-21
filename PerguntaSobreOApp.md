# Pergunta: "Também temos o App do Embarca.ai para Android e iOs, descreva como você automatizaria um fluxo de teste de compra no App citando qual os casos de teste e ferramentas de automatização usaria."

## Minha resposta: 

Tendo em vista que não conheço o produto ainda, a primeira coisa que eu faria seria um teste exploratório de 15 minutos para entender algumas das principais funcionalidades, também conversaria com os desenvolvedores para entender como as soluções foram implementadas e prever possíveis cenários.

### Sobre os casos de testes, o básico de toda aplicação como: 
-  Login válido, inválido.
-  Recuperação de senha
   
### Sobre a experiência de navegação
- Pesquisa, filtragem, categorias, ordenação.
- Título, imagem, descrição e preço.
- Adição e remoção de itens no carrinho, quantidade, cupons, etc.
- Conexão limitada, mensagens de erro, modo avião (se os dados persistem ao se conectar na internet novamente, por exemplo)

### Sobre localização
- Endereço de entrega válido, inválido, validação de cep.
- Verificar estoque na localidade, prazo de entrega.
  #### Também com 
  - Idioma, traduções.

### Sobre métodos de pagamento:.
- Métodos de pagamento (PIX, cartão de crédito na função débito, vice-versa, cartões inválidos, vencidos, bloqueados etc)
- Validação de cupom com certo tipo de pagamento(ex. Cupom só é válido para pagamento via PIX)


No que tange automação de dispositivos móveis Android e iOS, acredito que seria importante escolher ferramentas com uma comunidade engajada, como o  Appium ou Robot por exemplo.

Inclusive há um exemplo de uma automação mobile usando Appium, Appium Inspector, Vysor e Python em um dispositivo real Android, lá no  [![Visit My Portfolio](https://img.shields.io/badge/Meu%20Portfólio-FF5733)](https://eltondantas.com/). =)
