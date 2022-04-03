import React, { useState } from 'react';
import UserApi from '../../api/usersApi';
import Spinner from 'react-bootstrap/Spinner';
import Background from '../../components/atoms/Background/Background';
import Form from '../../components/molecules/Form/Form';
import Input from '../../components/atoms/Input/Input';
import Button from '../../components/atoms/Button/Button';
import Alert from '../../components/atoms/Alert/Alert';

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
        <Input type="text" name="code" onChange={handleChange} value={state.code} placeholder="code" />
        <Button text={'Send code'} />

        {alert !== '' ? <Alert text={alert} onClose={() => setAlert('')}></Alert> : null}
        {state.spinner === true && <Spinner animation="border" variant="primary" />}
      </Form>
    </Background>
  );
};

export default CodePage;
