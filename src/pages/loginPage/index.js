import React, { useState } from 'react';
import styles from './index.module.scss';
import UserApi from '../../api/usersApi';
import Background from '../../components/atoms/Background/Background';
import Form from '../../components/molecules/Form/Form';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from '../../components/atoms/Alert/Alert';
import Auth from '../../api/authApi';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUserLogged, setUserData, setUserIsAdmin } from '../../redux/actions/session';

const LoginPage = props => {
  const [state, setState] = useState({
    username: '',
    password: '',
    spinner: false,
  });

  const [alert, setAlert] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (state.username.trim() === '' || state.password.trim() === '') {
      setAlert('Proszę wypełnić wszystkie pola!!!');
      return;
    }

    const { username, password } = state;
    UserApi.loginUser(username, password).then(data => {
      if (data.succes) {
        setState({
          ...state,
          spinner: true,
        });

        const { token, user } = data;

        setTimeout(() => {
          if (Auth.isTokenActive()) {
            props.history.push('/home');
            return;
          } else {
            Auth.setToken(token);
            dispatch(setUserData(user));
            dispatch(setUserIsAdmin(user.isAdmin));
            dispatch(setUserLogged());
            props.history.push('/home');
          }
        }, 1000);
      } else {
        setAlert(data.message);
      }
    });
  };
  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Background width="100%">
      <Form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>name</label>
          <Input type="text" name="username" onChange={handleChange} value={state.username} placeholder="👱name" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>password</label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
            placeholder="🔐password"
          />
        </div>
        <Button text={'Login'} />
        {alert !== '' ? <Alert text={alert} onClose={() => setAlert('')}></Alert> : null}
        {state.spinner === true && <Spinner animation="border" variant="primary" />}
      </Form>
    </Background>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUserData(user));
  },
  setUserIsAdmin: () => {
    dispatch(setUserIsAdmin());
  },
  setUserLogged: () => {
    dispatch(setUserLogged());
  },
});

export default connect(() => ({}), mapDispatchToProps)(LoginPage);
