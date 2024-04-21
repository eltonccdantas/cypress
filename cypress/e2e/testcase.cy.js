require("cypress-xpath");
const login = require("../fixtures/login.cy.js");

beforeEach(() => {
    cy.login("testeqa@embarca.ai", "Arca123");
});

describe("Elton Dantas - Processo seletivo Embarca.ai", () => {
    
    it("Dado um usuário logado na página principal", () => {
        cy.visit("https://www.embarca-staging.com.br/");
    });

    it("Quando busca pela rota de Curitiba para Ponta Grossa", () => {
        cy.get("#origin_text").clear();
        cy.get("#origin_text").type("CURITIBA");
        cy.get('[data-id="0"]').click();

        cy.get("#destination_text").clear();
        cy.get("#destination_text").type("PONTA GROSSA");
        cy.get('[data-id="0"]').click();
    });

    it("E Quando seleciona uma data 15 dias após a data do teste", () => {

        var calendario = cy.get(".route_departure_at").click();
        const dataAtual = new Date();
        const dias = 15;

        //Aqui decidi pegar a data dinâmicamente. =)
        const dataFutura = new Date(
            dataAtual.valueOf() + dias * 24 * 60 * 60 * 1000
        ).getDate();

        cy.action({
            attr: `//*[@class="datepicker-days"]//tr/td[text()='${dataFutura}'][not(contains(@class, 'disabled day'))]`,
        }).click();

        cy.action({ attr: "//button[@id='search-trips-btn']" }).click();

        cy.url().should(
            "contains",
            "https://www.embarca-staging.com.br/passagem-de-onibus/curitiba-pr/ponta-grossa-pr"
        );
    });

    it("E seleciona o primeiro assento disponível", () => {

        cy.get('form[id="new_reservation"] button')
            .first()
            .should("be.visible");
        cy.get('form[id="new_reservation"] button').first().click();

        cy.wait(3000);

        cy.action({
            //Desta forma eu consigo selecionar o primeiro assento disponível.
            attr: '//*[@class="seats first-floor"]/div/div[not(contains(@class, "seat unavailable"))]',
        })
            .first()
            .click({ force: true });

        cy.wait(3000);

        cy.get("#next-button").click({ force: true });
    });

    it("Então os dados de pagamento podem ser preenchidos para finalizar a reserva.", () => {

        cy.get('input[placeholder="Digite seu nome"]').type("Elton Dantas");
        cy.get('input[placeholder="Digite o número do documento"]').type(
            "123456789"
        );
    });
});
