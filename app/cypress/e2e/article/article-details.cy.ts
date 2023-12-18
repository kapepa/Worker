import {profileMock} from "../../support/user";
import {ArticleType} from "../../../src/entities/Article/model/types/articleType";

describe("Details", () => {
  let article: ArticleType;

  before(function () {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password }).then(() => {
      cy.createArticle().then((body: ArticleType) => {
        article = body;
        cy.visit(`/article/${body.id}`);
      })
    })
  })

  after(() => {
    cy.deleteArticleByID(article.id)
  })

  it("should be exit article", () => {
    cy.get('[data-testid=article-details]').should('exist')
    cy.get(".article-details__title").should('have.text', article.title)
    cy.get(".article-details__subtitle").should('have.text', article.subtitle)

    cy.get(".rating-stars").scrollIntoView();
    cy.get(".rating-stars__unit").last().click();
    cy.get(".rating-card__btn-send").click();

    cy.get(".form-comment__input").scrollIntoView();
    cy.get(".form-comment__input").clear().type('val', 'Test comment!!!');
    cy.get(".form-comment__btn").click()
  })
})