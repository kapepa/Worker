import {screen} from '@testing-library/react'
import {act} from 'react-dom/test-utils';
import {RenderWithMemoryRouter} from "../../../../shared/test/renderWithMemoryRouter";
import {RouterPath} from "../../../../shared/const/Routers";
import UserJSON from "../../../../shared/test/mock/user.json";
import ArticleJSON from "../../../../shared/test/mock/article.json";
import RatingJSON from "../../../../shared/test/mock/rating.json";
import {Role, UsersState, UsersTypes} from "../../../../entities/Users";
import {StateSchema} from "../../Store";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {ArticlesState} from "../../../../entities/Article";
import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import {RatingType} from "../../../../features/RatingDisplay";
import {EditorArticleState} from "../../../../features/EditorArticle";
import React from "react";
import {DetailsState} from "../../../../entities/Article/model/types/detailsState";
import {ProfileState} from "../../../../entities/Profile";
import Error from "../../../../pages/Error";


describe("<Routers/>",  () => {
  let userMock = UserJSON as UsersTypes;
  let articleMock = ArticleJSON.article as ArticleType;
  let RatingMock = RatingJSON as RatingType;

  test("<About/>", async () => {
    await act(async () => {
      RenderWithMemoryRouter({path: RouterPath.ABOUT});
    });
    expect(await screen.findByTestId("about")).toBeInTheDocument();
  })

  test("<Admin/>", async () => {
    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.ADMIN,
          store: {
            users: {
              error: undefined,
              loading: false,
              profile: userMock as UsersTypes,
              roles: {
                [Role.ADMIN]: true,
                [Role.MANAGER]: true,
                [Role.USER]: true,
              }
            }
          } as StateSchema
        }
      );
    });

    expect(await screen.findByTestId("admin")).toBeInTheDocument();
  })

  test("<Home/>", async () => {
    await act(async () => {
      RenderWithMemoryRouter({path: RouterPath.HOME});
    });

    expect(await screen.findByTestId("home")).toBeInTheDocument();
  })

  test("<ArticleCreate/>", async () => {
    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.ARTICLE_CREATE,
          store: {
            users: {
              profile: UserJSON as UsersTypes,
            } as UsersState,
            editorArticle: {
              loading: false,
              error: undefined,
              idArt: undefined,
              record: {},
              edit: undefined,
            } as EditorArticleState
          } as StateSchema
        }
      );
    });

    expect(await screen.findByTestId("article-create")).toBeInTheDocument();
  })

  test("<ArticleEdit/>", async () => {
    jest.spyOn(React, "useLayoutEffect").mockImplementation(() => {})

    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.ARTICLE_EDIT,
          params: articleMock.id,
          store: {
            users: {
              profile: UserJSON,
            } as UsersState,
            editorArticle: {
              loading: false,
              error: undefined,
              idArt: articleMock.id,
              record: articleMock,
              edit: articleMock,
            } as EditorArticleState
          } as StateSchema
        }
      );
    });

    expect(await screen.findByTestId("article-edit")).toBeInTheDocument();
  })

  test("<Details/>", async () =>{
    jest.spyOn(React, "useLayoutEffect").mockImplementation(() => {});

    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.ARTICLE,
          params: articleMock.id,
          store: {
            users: {
              profile: UserJSON,
            } as UsersState,
            details: {
              loading: false,
              error: undefined,
              data: {...articleMock, id: undefined},
            } as DetailsState
          } as StateSchema
        }
      );
    });

    expect(await screen.findByTestId("details")).toBeInTheDocument();
  })

  test("<Article/>", async () => {
    global.IntersectionObserver = jest.fn(() => ({observe: (props: any) => {}, unobserve: (props: any) => {}})) as any

    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.ARTICLE,
          store: {
            users: {
              profile: userMock,
            } as UsersState,
            articles: {
              loading: false,
              data: undefined,
              error: undefined,
              ids: [articleMock.id],
              entities: {[articleMock.id as string]: articleMock},
              view: ArticlesView.Block,
              hasMore: true,
            } as ArticlesState,
          } as StateSchema
        }
      );
    });

    expect(await screen.findByTestId("article")).toBeInTheDocument();
  })

  test("<Profile/>", async () => {;
    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.PROFILE,
          params: userMock.id,
          store: {
            users: {
              profile: userMock,
            } as UsersState,
            profile: {
              loading: false,
              data: userMock,
              edit: userMock,
              error: undefined,
              readonly: true,
            } as ProfileState
          } as StateSchema
        }
      );
    });

    expect(await screen.findByTestId("profile")).toBeInTheDocument();
  })

  test("<Error/>", async () => {;
    await act(async () => {
      RenderWithMemoryRouter(
        {
          path: RouterPath.HOME,
          params: userMock.id,
        }
      );
    });

    expect(await screen.findByTestId("error")).toBeInTheDocument();
  })
})