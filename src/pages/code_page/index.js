import React, { useState } from 'react';
import UserApi from '../../utils/usersApi';
import Spinner from 'react-bootstrap/Spinner';
import Background from '../../components/background';
import Form from '../../components/form/';
import Input from '../../components/input/';
import Button from '../../components/button/';
import AlertComponent from '../../components/alert/';

const CodePage = props => {
  const [state, setState] = useState({
    code: '',
    spinner: false,
  });

  const [alert, setAlert] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (state.code.trim() === '') {
      setAlert('Proszę wypełnić wszystkie pola!!!');
      return;
    }

    const { code } = state;
    UserApi.codeUser(code)
      .then(data => {
        setState({
          ...state,
          spinner: true,
        });
        setTimeout(() => {
          props.history.push('/home');
        }, 3000);
      })
      .catch(error => {});
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
        <Input
          type="text"
          name="code"
          onChange={handleChange}
          value={state.code}
          placeholder="code"
        />
        <Button text={'Send code'} />

        {alert !== '' ? (
          <AlertComponent
            text={alert}
            onClose={() => setAlert('')}
          ></AlertComponent>
        ) : null}
        {state.spinner === true && (
          <Spinner animation="border" variant="primary" />
        )}
      </Form>
    </Background>
  );
};

export default CodePage;
