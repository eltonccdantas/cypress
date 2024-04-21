Cypress.Commands.add("login", (username, password) => {
    cy.session([username, password], () => {
        
        cy.visit("https://www.embarca-staging.com.br/sessions/new");

        cy.get("#email").type(username, { log: false });
        cy.get("#pass_log_id").type(password, { log: false });
        cy.contains("form > .btn", "Entrar").click();

        cy.intercept("https://www.embarca-staging.com.br/sessions/new");

        cy.request({
            method: "POST",
            failOnStatusCode: false,
            url: "https://www.embarca-staging.com.br/sessions/new",
            body: {
                identifier: username,
                password: password,
            },
        }).then((response) => {
            const authToken = response.body.jwt;
            cy.log("Token de autenticação:", authToken);
        });
    });
});
