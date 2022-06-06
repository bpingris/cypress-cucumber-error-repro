import { Before, When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: "@mock" }, () => {
  cy.intercept("https://jsonplaceholder.typicode.com/todos/1", {
    data: { title: "foobar" },
  });
});

const mocksList = [
  {
    tags: "@mock and @api",
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    alias: 'jsonplaceholder',
    handler: (req: any) => {
        req.reply({ title: 'foobar' })
    },
  },
  {
    tags: "@mock and @api and @foo",
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos/1",
    alias: 'jsonplaceholder',
    handler: (req: any) => {
        req.reply({ title: 'barqux' })
    },
  },
];

for (const mock of mocksList) {
  Before({ tags: mock.tags }, () => {

    cy
      .intercept({
        url: mock.url,
        method: mock.method,
      }, mock.handler)
      .as(mock.alias)
  });
}

Given('I navigate to {string}', (path: string) => {
    cy.visit(path)
})

When("I click on the button", () => {
  cy.get("button").click();
});

Then("I should see {string} in the container", (content: string) => {
  cy.get("#container").contains(content);
});
