// - [ ] Counter는 초기값 0 부터 시작한다.
// - [ ] `+` 버튼을 클릭하면 Count가 1 증가하여 표시된다.
// - [ ] `-` 버튼을 클릭하면 Count가 1 감소하여 표시된다.
// - [ ] Count는 최소 0, 최대 5까지만 표시된다.
// - [ ] Reset 버튼을 클릭하면 Count가 0으로 초기화된다.

describe("React Counter App 테스트", () => {
  beforeEach(() => {
    // cypress.json에 작성해주어 주소 생략 가능
    // cy.visit("http://localhost:3000");

    cy.visit("");
  });

  it("Counter는 초기값 0 부터 시작한다.", () => {
    cy.get("#count-value").should("have.text", "0");
  });

  it("`+` 버튼을 클릭하면 Count가 1 증가하여 표시된다.", () => {
    cy.get("#count-value")
      .invoke("text")
      .then((value) => {
        const prevValue = Number(value);
        cy.get("#increase-button").click();
        cy.get("#count-value")
          .invoke("text")
          .should("eq", String(prevValue + 1));
      });
  });

  it("`-` 버튼을 클릭하면 Count가 1 감소하여 표시된다.", () => {
    cy.get("#increase-button").click();
    cy.get("#count-value")
      .invoke("text")
      .then((value) => {
        const prevValue = Number(value);
        cy.get("#decrease-button").click();
        cy.get("#count-value").invoke("text").should("eq", "0");
      });
  });

  it("Count는 최소 0 까지만 표시된다.", () => {
    for (let i = 0; i < 2; i++) {
      cy.get("#decrease-button").click();
    }
    cy.get("#count-value").invoke("text").should("eq", "0");
  });

  it("Count는 최대 5까지만 표시된다.", () => {
    for (let i = 0; i < 7; i++) {
      cy.get("#increase-button").click();
    }
    cy.get("#count-value").invoke("text").should("eq", "5");
  });

  it("Reset 버튼을 클릭하면 Count가 0으로 초기화된다.", () => {
    for (let i = 0; i < 3; i++) {
      cy.get("#increase-button").click();
    }
    cy.get("#reset-button").click();
    cy.get("#count-value").invoke("text").should("eq", "0");
  });
});
