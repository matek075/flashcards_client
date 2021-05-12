import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserApi from '../utils/usersApi'

import StartingPage from '../pages/starting_page/'
import FlashCardsSectionPage from '../pages/learn_page/'
import quizSectionPage from '../pages/quizSection_page/'
import QuizPage from '../pages/quiz_page'
import NotFoundPage from './notFoundPage/index'
import FlashCardsPage from './flash_cards_page'

import PublicRoute from '../components/routes/publicRoute/index.js';
import PrivateAdminRoute from '../components/routes/privateAdminRoute';
import PrivateUserRoute from '../components/routes/privateUserRoute';

import { RoutesData } from './_routes_data_/index.js';

import Auth from '../utils/auth';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  setUserLogged,
  setUserIsAdmin,
  setUserData,
} from '../redux/actions/session';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Auth.isTokenActive()) {
      console.log('token aktywny');
      dispatch(setUserLogged());
      let userId = Auth.getUserId();
      UserApi.fetchOneUser(userId).then(data => {
        if (data.succes) {
          dispatch(setUserIsAdmin(data.user.isAdmin));
          dispatch(setUserData(data.user));
        } else console.log('nie znaleziono uzytkownika');
      });
    } else {
      console.log('token NIE aktywny');
    }
  }, []);

  let getPublicRoutes = () =>
    RoutesData.publicRoute.map((route, i) => {
      return <PublicRoute path={route.path} component={route.component} />;
    });
  let getPrivateRoutes = () =>
    RoutesData.privateUserRoute.map((route, i) => {
      return <PrivateUserRoute path={route.path} component={route.component} />;
    });
  let getAdminRoutes = () =>
    RoutesData.privateAdminRoute.map((route, i) => {
      return (
        <PrivateAdminRoute path={route.path} component={route.component} />
      );
    });

  let PublicRoutes = getPublicRoutes(),
    PrivateRoutes = getPrivateRoutes(),
    AdminRoutes = getAdminRoutes();

  function getRoutes() {
    let routes = PublicRoutes.concat(PrivateRoutes, AdminRoutes);
    return routes;
  }
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={StartingPage} />
        <PrivateUserRoute exact path="/learn/" component={FlashCardsSectionPage} />
        <Route path="/learn/:languageType" children={<FlashCardsPage />} />
        <PrivateUserRoute exact path="/quiz/" component={quizSectionPage} />
        <Route path="/quiz/:languageType" children={<QuizPage />} />
        {getRoutes()}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = dispatch => ({
  setUserLogged: () => {
    dispatch(setUserLogged());
  },
});

export default connect(() => ({}), mapDispatchToProps)(App);
