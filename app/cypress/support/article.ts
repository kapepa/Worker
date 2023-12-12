import {ArticleBlocks, ArticleType, ArticleTypesKey} from "../../src/entities/Article/model/types/articleType";
import {InForm} from "../helper/inForm";
import config from "../../src/config";
import {ArticleBlockType} from "../../src/entities/Article/model/types/articleBlock";

const articleMock: ArticleType = {
  "title": "Javascript news",
  "subtitle": "Что нового в JS за 2022 год?",
  "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  "views": 1022,
  "createdAt": "2022-01-10T15:30:00+00:00",
  "type": [ArticleTypesKey.IT],
  "blocks": [],
  "comments": []
}

const blockMock: ArticleBlocks =     {
  "id": "4",
  "type": ArticleBlockType.CODE,
  "code": "<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;"
}

Cypress.Commands.add<any>(
  'createArticle',
  ({articleID, block = blockMock}: {articleID: string, block: ArticleBlocks}) => {
    const form = InForm(block);
    const token = window.localStorage.getItem("token");

    cy.request({
      method: 'POST',
      url: `${config.api}/api/create/block/${articleID}`,
      body: form,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    }).then(({ body }) => {

    })
  }
)

Cypress.Commands.add<any>(
  'createArticle',
  (article: ArticleType = articleMock) => {
    const form = InForm(article);
    const token = window.localStorage.getItem("token");

    cy.request({
      method: 'POST',
      url: `${config.api}/api/articles/art`,
      body: form,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    }).then(({ body }) => {

    })
  }
)

Cypress.Commands.add<any>(
  'createArticle',
  (article: ArticleType = articleMock) => {
    const form = InForm(article);
    const token = window.localStorage.getItem("token");

    cy.request({
      method: 'POST',
      url: `${config.api}/api/articles/art`,
      body: form,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      }
    }).then(({ body }) => {

    })
  }
)