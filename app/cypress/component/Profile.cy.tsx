import {Profile} from "../../src/pages/Profile";
import {CypressWithComponent} from "../../src/shared/test/cypressWithComponent";

describe('Profile.cy.tsx', () => {
  const userID: string = "userID";
  const user = {
    "id": "userID",
    "username": "UserName",
    "firstname": "Firstname",
    "lastname": "Lastname",
    "email": "user@mail.com",
    "avatar": "https://cdn-icons-png.flaticon.com/512/1088/1088537.png",
    "country": "America",
    "city": "Loa Angeles",
    "roles": ["USER", "ADMIN"]
  } as any

  beforeEach(() => {
    cy.intercept('GET', `/api/users/profile`, {fixture: "user.json"})
    cy.intercept('GET', `/api/users/customer/${userID}`, {fixture: "user.json"})
  })

  it('playground', () => {
    cy.mount(
      CypressWithComponent(
        <Profile/>,
        {
          route: `/profile/${userID}`,
          reloadedState: {
            users: {
              profile: user
            },
            profile: {
              loading: false,
              data: user,
              edit: user,
              error: undefined,
              readonly: true,
            }
          }
        }
      )
    );
  })
})