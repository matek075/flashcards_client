const basicUrl = 'https://flash-cards-server2.herokuapp.com'
const devUrl = 'http://localhost:3001'

//  user
export const url_userLogin =`${basicUrl}/users/login`
export const url_userGetAll =`${basicUrl}/users/all`
export const url_userGetOne =`${basicUrl}/users/one`
export const url_userRegister =`${basicUrl}/users/register`
export const url_userCode =`${basicUrl}/users/code`
export const url_userDeleteDatabase =`${basicUrl}/users/deleteDataBase`

//  flashCards
export const url_getByType = `${basicUrl}/flashCards/getByType/?type=`
export const url_createOne = `${basicUrl}/flashCards/createOne`

//  quiz
export const url_quiz = `${basicUrl}/quiz/`
export const url_getQuiz = `${basicUrl}/quiz/getByType/?type=`
export const url_quizQuestion = `${basicUrl}/quiz/question`