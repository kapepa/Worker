import {profileMock} from "../../support/user";
import {ArticleBlocks} from "../../../src/entities/Article";

describe("Details", () => {
  let article: ArticleBlocks;

  before(function () {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password }).then(() => {
      cy.createArticle().then((body: ArticleBlocks) => {
        article = body;
      })
    })
  })

  after(() => {
    cy.deleteArticleByID()
  })

  beforeEach(function () {
    // cy.visit(`/`);
  })
})