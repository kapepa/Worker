import {ArticleBlocks, ArticleType, ArticleTypesKey} from "../../src/entities/Article/model/types/articleType";
import {InForm} from "../helper/inForm";
import config from "../../src/config";
import {ArticleBlockType} from "../../src/entities/Article/model/types/articleBlock";

const blockMock: ArticleBlocks =     {
  type: ArticleBlockType.CODE,
  code: "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\">TEST</p>\n\n </body>\n</html>;"
}

const articleMock: ArticleType | any = {
  title: "Test Article Title",
  subtitle: "Test Article Subtitle",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  type: [ArticleTypesKey.IT],
  blocks: [blockMock],
  comments: []
}

// @ts-ignore
Cypress.Commands.add<any>(
  'createBlock',
  ({articleID, block = blockMock}: {articleID: string, block: ArticleBlocks}) => {
    const form = InForm(block);
    const token = window.localStorage.getItem("token");

// @ts-ignore
    cy.request({
      method: 'POST',
      url: `${config.api}/api/articles/create/block/${articleID}`,
      body: form,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    }).then(({ body }: {body: ArticleBlocks}) => {
      return body
    })
  }
)

// @ts-ignore
Cypress.Commands.add<any>(
  'createArticle',
  (article: ArticleType = articleMock) => {
    const token = window.localStorage.getItem("token");

// @ts-ignore
    return  cy.request({
      method: 'POST',
      url: `${config.api}/api/articles/create/art`,
      body: article,
      headers: {
        Authorization: `Bearer ${token}`,
      }
      // @ts-ignore
    }).then(({body}: Cypress.Response<{body: ArticleType}>) => {
      return body
    })
  }
)

// @ts-ignore
Cypress.Commands.add<any>(
  'deleteArticleByID',
  (articleID: string) => {
    const token = window.localStorage.getItem("token");

  // @ts-ignore
    cy.request({
      method: 'DELETE',
      url: `${config.api}/api/articles/delete/${articleID}`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(({ body }) => {

    })
  }
)