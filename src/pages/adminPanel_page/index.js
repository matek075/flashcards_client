import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss';
import FlashCardsApi from '../../utils/flashCardsApi';
import Form from 'react-bootstrap/Form';
import Button from '../../components/button/';
import Spinner from 'react-bootstrap/Spinner';
import AlertComponent from '../../components/alert/';
import Background from '../../components/background';
import Auth from '../../utils/auth';


const AdminPage = () => {
  const [state, setState] = useState({
    question: '',
    answear: '',
    language: 'javascript',
    type: 'standard',
    spinner: false,
    created: false
  });

  const [Alert, setAlert] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    if (state.question.trim() === '' || state.answear.trim() === '') {
      setAlert('Proszę wypełnić wszystkie pola!!!');
      return;
    }

    const { question, answear, language, type } = state;

    FlashCardsApi.createOne(language, type, question, answear)
      .then(data => {
        setState({
          ...state,
          spinner: true,
        });
        setTimeout(() => {
          setState({
            ...state,
            created: true,
          });
        }, 3000);
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

  const createdFlashCard = () =>{
    setState({
      ...state,
      created:false
    })
    alert('stworzono fiszkę')
  }

  function logOut() {
    Auth.removeToken();
    window.location = '/';
  }

  return (
    <Background width="100%">
      <h2 className={styles.header}>Panel Admina</h2>
      <h2 className={styles.header}>Panel do tworzenia fiszki</h2>
      <Form style={{ width: '40vw' }} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicFront">
          <Form.Control
            placeholder="pytanie"
            name="question"
            value={state.question}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicBack">
          <Form.Control
            placeholder="odpowiedź"
            name="answear"
            value={state.answear}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="FormBasicLanguage">
          <Form.Control
            as="select"
            custom
            name="language"
            value={state.language}
            onChange={handleChange}
          >
            <option value="javascript">javascript</option>
            <option value="C#">C#</option>
            <option value="css">css</option>
            <option value="html">html</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicType">
          <Form.Control
            as="select"
            custom
            name="type"
            value={state.type}
            onChange={handleChange}
          >
            <option value="standard">standard</option>
            <option value="can write">can write</option>
            <option value="other">other</option>
          </Form.Control>
        </Form.Group>
        <Button text={'stwórz'} />
        {Alert !== '' ? (
          <AlertComponent
            text={Alert}
            onClose={() => setAlert('')}
          ></AlertComponent>
        ) : null}
        {
          state.created ? createdFlashCard() : null
        }
        {state.spinner == true && (
          <Spinner animation="border" variant="primary" />
        )}
      </Form>
      <br></br>
      <Button
        text={'log out'}
        onClick={() => {
          logOut();
        }}
      />
    </Background>
  );
};

export default AdminPage;
