import React from 'react';
import {render, screen} from '@testing-library/react';
import AppLink, {AppLinkTheme} from "./AppLink";
import {BrowserRouter as Router} from 'react-router-dom';

describe("<AppLink/>", () => {

  test('renders AppLink', () => {
    render(
      <Router>
        <AppLink className={"some"} to={"/"} theme={AppLinkTheme.SECONDARY}/>
      </Router>
    );
    const linkElement = screen.getByTestId("nav-link");
    expect(linkElement).toBeInTheDocument();
  });

})

