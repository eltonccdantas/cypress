[![Visite Meu Portfólio](https://img.shields.io/badge/Visite%20Meu%20Portfólio-FF5733)](https://eltondantas.com/)

# Teste QA Embarca.ai  🚌🌟

O processo consiste em construir um teste simples, automatizado com [Cyperss](https://www.cypress.io/) para uma aplicação web, onde devemo seguir o fluxo:

1 - Fazer login. <br>
2 - Buscar uma rota com data para 15 dias após a data do teste. <br>
3 - Selecionar a primeira viagem disponível. <br>
4 - Selecionar o primeiro assento disponível. <br>
5 - Preencher os campos de nome e documento com qualquer dado aleatório.

## Vídeo do teste rodando ⏯️

https://github.com/eltonccdantas/cypress-embarca/assets/63858122/ee5a2b8f-f765-446b-9737-527363d0c7b3



## Desenvolvido com:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a href="[https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://nodejs.org/en)" target="_blank" rel="noreferrer"><img src="https://www.svgrepo.com/show/378837/node.svg" width="36" height="36" alt="Javascript" /></a>
<a href="https://www.cypress.io/" target="_blank" rel="noreferrer"><img src="https://www.svgrepo.com/show/330247/cypress.svg" width="36" height="36" alt="Cypress" /></a>
<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://www.svgrepo.com/show/374171/vscode.svg" width="36" height="36" alt="VSCode" /></a>


### Pré-requisitos:
Antes de executar os testes localmente, é bom a gente se certificar de ter o [Node.js](https://nodejs.org/en) instalado, pois ele é necessário para rodar o Cypress. 


![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/bb42cfbb-cff8-46cf-8bbf-520d04f98122)


### Agora vamos clonar este Repositório:
```
git clone https://github.com/eltonccdantas/cypress-embarca.git
```

Vamos entrar neste diretório
```
cd cypress-embarca
```
e logo depois 
### Instalar as dependências:

```
npm install
```

### É hora de executar o teste localmente:
``` 
npx cypress open
```

### Vamos selecionar 'E2E Testing'
![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/842c62b9-9c79-4326-b8b3-c2a189375972)

### Depois escolher o Chrome ou Edge.
![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/907e9931-0dfe-4ea0-96df-2c426f38e9ae)

### E então clicar no botão ' Start E2E Testing in... '
![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/5a8e0bd8-74f4-4482-9d51-6f4ebe1eb20c)

### Finalmente vamos selecionar nosso caso de teste (testcase.cy.js) e ver ele rodando. 🔍
![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/4a7079f7-0b0b-4354-97fb-18e7198b3e85)

Observações
1 - Caso apresente erro, vamos limpar a sessão e tentar novamente, coisas como o ambiente de testes, versão do nosso browser e outras coisas, podem tornar o teste 'flaky', por isso o ideal seria rodar no mesmo ambiente.


![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/449cd47e-7b9f-4cef-a0a5-e8523c217b7d)

2 - Por ser um teste simples, optei por não inserir conceitos de page object, dsl, entre outros, e realizar o teste de forma simples. Caso seja necessário, há uma versão '2.0'
engatilhada. =)


![image](https://github.com/eltonccdantas/cypress-embarca/assets/63858122/d800dff2-99f6-467c-ad73-4201fe8c9d7e)

Obrigado pela oportunidade. 🙏
