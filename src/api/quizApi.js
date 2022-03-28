import { url_quiz,url_getQuiz, url_quizQuestion } from './url.js'

export default class QuizApi {
    static getQuiz(id) {
        return new Promise((resolve, reject) => {
            fetch(url_getQuiz + id, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        reject({ message: 'Błąd - status: ' + res.status });
                    }
                })
                .then(data => {
                    resolve(data);
                })
                .catch(error => {
                    reject({ message: error.toString() });
                });
        });
    }
    static createQuiz(name, time, questions) {
        return new Promise((resolve, reject) => {
            fetch(url_quiz, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    time,
                    questions
                })
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject({ message: 'Błąd - status: ' + res.status });
                }
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject({ message: error.toString() });
            });
        });
    }
    static deleteQuiz(id) {
        return new Promise((resolve, reject) => {
            fetch(url_quiz, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id
                })
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject({ message: 'Błąd - status: ' + res.status });
                }
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject({ message: error.toString() });
            });
        });
    }
    static updateQuiz(id, name, time, questions) {
        return new Promise((resolve, reject) => {
            fetch(url_quiz, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id,
                    name,
                    time,
                    questions
                })
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject({ message: 'Błąd - status: ' + res.status });
                }
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject({ message: error.toString() });
            });
        });
    }

    //quiz question
    static createQuizQuestion(quizId, question, answers, correctAnswer) {
        return new Promise((resolve, reject) => {
            fetch(url_quizQuestion, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    quizId,
                    question,
                    answers,
                    correctAnswer
                })
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject({ message: 'Błąd - status: ' + res.status });
                }
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject({ message: error.toString() });
            });
        });
    }
    static removeQuizQuestion(id) {
        return new Promise((resolve, reject) => {
            fetch(url_quizQuestion, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id
                })
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject({ message: 'Błąd - status: ' + res.status });
                }
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject({ message: error.toString() });
            });
        });
    }
    static updateQuizQuestion(id, quizId, question, answers, correctAnswer) {
        return new Promise((resolve, reject) => {
            fetch(url_quizQuestion, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id,
                    quizId,
                    question,
                    answers,
                    correctAnswer
                })
            }).then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    reject({ message: 'Błąd - status: ' + res.status });
                }
            }).then(data => {
                resolve(data);
            }).catch(error => {
                reject({ message: error.toString() });
            });
        });
    }
}