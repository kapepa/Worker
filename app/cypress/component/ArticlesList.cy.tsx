import {CypressWithComponent} from "../../src/shared/test/cypressWithComponent";
import {ArticlesList} from "../../src/entities/Article";
import {ArticlesView} from "../../src/shared/const/ArticlesView";

describe("ArticlesList.cy", () => {
  const article = {
    "id": "1",
    "title": "Javascript news",
    "subtitle": "Что нового в JS за 2022 год?",
    "img": "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    "views": 1022,
    "createdAt": "2022-01-10T15:30:00+00:00",
    "type": ["IT"],
    "blocks": [],
    "comments": []
  }

  beforeEach(() => {
    window.localStorage.setItem("token", "SomeToken");
    cy.intercept('GET', `/api/users/profile`, {fixture: "user.json"})
  })

  it("playground", () => {
    cy.mount(
      CypressWithComponent(
        <ArticlesList view={ArticlesView.Block}/>,
        {
          route: "/",
          reloadedState: {
            articles: {
              ids: [article.id],
              entities: { [article.id]: article } as any
            }
          }
        }
      )
    )
  })
})