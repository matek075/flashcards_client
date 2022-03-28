import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './index.module.scss';
import FlashCardsApi from '../../api/flashCardsApi';
import QuizApi from '../../api/quizApi';
import Form from 'react-bootstrap/Form';
import Button from '../../components/button/';
import Spinner from 'react-bootstrap/Spinner';
import AlertComponent from '../../components/alert/';
import Background from '../../components/background';
import Auth from '../../api/authApi';


const AdminPage = () => {
  const [state, setState] = useState({
    question: '',
    answear: '',
    language: 'javascript',
    type: 'standard',
    quizQuestion: '',
    quizQuestionAnswer1: '',
    quizQuestionAnswer2: '',
    quizQuestionAnswer3: '',
    quizQuestionAnswer4: '',
    quizQuestionCorrectAnswer: '',
    spinner: false,
    created: false,
    createdQuizQuestion: false,
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
  const handleSubmitQuizQuestion = async event => {
    event.preventDefault();
    if (state.quizQuestion.trim() === '' || state.quizQuestionAnswer1.trim() === '' || state.quizQuestionAnswer2.trim() === '' || state.quizQuestionAnswer3.trim() === '' || state.quizQuestionAnswer4.trim() === '' || state.quizQuestionCorrectAnswer.trim() === '') {
      setAlert('Proszę wypełnić wszystkie pola dla formularza tworzenia pytania do quizu!!!');
      return;
    }

    const { quizQuestion, quizQuestionAnswer1, quizQuestionAnswer2, quizQuestionAnswer3, quizQuestionAnswer4, quizQuestionCorrectAnswer } = state;
    const answers = [quizQuestionAnswer1, quizQuestionAnswer2, quizQuestionAnswer3, quizQuestionAnswer4];

    QuizApi.createQuizQuestion(null, quizQuestion, answers, quizQuestionCorrectAnswer)
      .then(data => {
        setState({
          ...state,
          spinner: true,
        });
        setTimeout(() => {
          setState({
            ...state,
            createdQuizQuestion: true,
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

const createdInfo = (message) => {
  setState({
    ...state,
    created: false,
    createdQuizQuestion: false,
  })
  alert(message)
}

function logOut() {
  Auth.removeToken();
  window.location = '/';
}

return (
  <Background width="100%">
    <h3 className={styles.header}>Panel Admina</h3>
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
    </Form>
    <br></br>
    <h2 className={styles.header}>Panel do tworzenia pytania do quizu</h2>
    <Form style={{ width: '40vw' }} onSubmit={handleSubmitQuizQuestion}>
      <Form.Group controlId="quizQuestion">
        <Form.Control
          placeholder="pytanie"
          name="quizQuestion"
          value={state.quizQuestion}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="quizQuestionAnswer1">
        <Form.Control
          placeholder="odpowiedź1"
          name="quizQuestionAnswer1"
          value={state.quizQuestionAnswer1}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="quizQuestionAnswer2">
        <Form.Control
          placeholder="odpowiedź2"
          name="quizQuestionAnswer2"
          value={state.quizQuestionAnswer2}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="quizQuestionAnswer3">
        <Form.Control
          placeholder="odpowiedź3"
          name="quizQuestionAnswer3"
          value={state.quizQuestionAnswer3}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="quizQuestionAnswer4">
        <Form.Control
          placeholder="odpowiedź4"
          name="quizQuestionAnswer4"
          value={state.quizQuestionAnswer4}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="quizQuestionCorrectAnswer">
        <Form.Control
          as="select"
          custom
          name="quizQuestionCorrectAnswer"
          value={state.quizQuestionCorrectAnswer}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Control>
      </Form.Group>
      <Button text={'stwórz'} />
    </Form>
    <br></br>
    {Alert !== '' ? (
      <AlertComponent
        text={Alert}
        onClose={() => setAlert('')}
      ></AlertComponent>
    ) : null}
    {
      state.created && createdInfo('stworzono fiszkę')
    }
    {
      state.createdQuizQuestion && createdInfo('stworzono pytanie do quizu')
    }
    {state.spinner === true && (
      <Spinner animation="border" variant="primary" />
    )}
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
