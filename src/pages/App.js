import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserApi from '../api/usersApi'

import QuizPage from './quizPage'
import NotFoundPage from './notFoundPage/index'
import FlashCardsPage from './flashCardsPage'

import PublicRoute from '../routes/publicRoute/index.js';
import PrivateAdminRoute from '../routes/privateAdminRoute';
import PrivateUserRoute from '../routes/privateUserRoute';

import { RoutesData } from '../routes/_routes_data_/index.js';

import Auth from '../api/authApi';
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
      dispatch(setUserLogged());
      let userId = Auth.getUserId();
      UserApi.fetchOneUser(userId).then(data => {
        if (data.succes) {
          dispatch(setUserIsAdmin(data.user.isAdmin));
          dispatch(setUserData(data.user));
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  let getPublicRoutes = () =>
    RoutesData.publicRoute.map((route, i) => {
      if(route.exact) return <PublicRoute exact path={route.path} component={route.component} />;
      return <PublicRoute path={route.path} component={route.component} />;
    });
  let getPrivateRoutes = () =>
    RoutesData.privateUserRoute.map((route, i) => {
      if(route.exact) return <PrivateUserRoute exact path={route.path} component={route.component} />;
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
        <Route path="/learn/:languageType" children={<FlashCardsPage />} />
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
