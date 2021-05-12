import React from 'react';
import Background from '../../components/background';
import classes from './index.module.scss';
const NotFoundPage = () => {
  return (
    <Background width="100%">
      <h3 className={classes.notFound}>Page not found :-( </h3>
    </Background>
  );
};
export default NotFoundPage;