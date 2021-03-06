import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import MainRecipes from '../pages/MainRecipes';
import CocktailsProvider from '../context/CocktailsProvider';
import MealsProvider from '../context/MealsProvider';
import UserContext from '../context/UserContext';

const PROFILE_TOP_BUTTON = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH_TOP_BUTTON = 'search-top-btn';

// const renderWithRouter = (ui, { route = '/' } = {}) => {
//   window.history.pushState({}, 'Login Page', route);

//   return render(ui, { wrapper: BrowserRouter });
// };

const renderWithRouterAndContext = (ui, { providerProps, route = '/' } = {}) => {
  window.history.pushState({}, 'Login Page', route);
  const history = createMemoryHistory();
  return ({
    ...render(
      <CocktailsProvider>
        <MealsProvider>
          <UserContext.Provider { ...providerProps }>
            {ui}
          </UserContext.Provider>
        </MealsProvider>
      </CocktailsProvider>,
      { wrapper: BrowserRouter },
    ),
    history,
  });
};

describe('tests `header` component ', () => {
  it('1-contains a profile button', () => {
    renderWithRouterAndContext(<MainRecipes />);
    const profileBttn = screen.getByTestId(PROFILE_TOP_BUTTON);
    expect(profileBttn).toBeInTheDocument();
  });

  it('1-contains a page title', () => {
    renderWithRouterAndContext(<MainRecipes />);
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toBeInTheDocument();
  });

  it('2-contains a profile button', () => {
    renderWithRouterAndContext(<MainRecipes />);
    const searchBttn = screen.getByTestId(SEARCH_TOP_BUTTON);
    expect(searchBttn).toBeInTheDocument();
  });
});
