import React, { useState } from 'react';
import styles from './index.module.scss'
import UserApi from '../../utils/usersApi';
import Background from '../../components/background';
import Form from '../../components/form/';
import Input from '../../components/input/';
import Button from '../../components/button/';
import Spinner from 'react-bootstrap/Spinner';
import AlertComponent from '../../components/alert/';

const RegisterPage = props => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    reppassword: '',
    spinner: false,
  });

  const [alert, setAlert] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    if (
      state.username.trim() === '' ||
      state.email.trim() === '' ||
      state.password.trim() === '' ||
      state.reppassword.trim() === ''
    ) {
      setAlert('Proszę wypełnić wszystkie pola!!!');
      return;
    }

    if (state.password !== state.reppassword) {
      setAlert('Hasła nie są zgodne!');
      return;
    }

    const { username, password, email } = state;
    UserApi.registerUser(username, password, email)
      .then(data => {
        setState({
          ...state,
          spinner: true,
        });
        setTimeout(() => {
          props.history.push('/code');
        }, 1000);
      })
      .catch(error => {
        console.log(error);
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
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={state.username}
            placeholder="👱name"
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>email</label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={state.email}
            placeholder="📧email"
          />
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
        <div className={styles.inputGroup}>
          <label className={styles.label}>retype password</label>
          <Input
            type="password"
            name="reppassword"
            onChange={handleChange}
            value={state.reppassword}
            placeholder="🔐retype password"
          />
        </div>

        <Button text={'Register'} />
        {alert !== '' ? (
          <AlertComponent
            text={alert}
            onClose={() => setAlert('')}
          ></AlertComponent>
        ) : null}
        {state.spinner == true && (
          <Spinner animation="border" variant="primary" />
        )}
      </Form>
    </Background>
  );
};

export default RegisterPage;
