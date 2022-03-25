import Auth from './authApi'
import {url_userLogin, url_userRegister,url_userCode,url_userDeleteDatabase,url_userGetAll,url_userGetOne} from './url.js'

const token = Auth.getToken()

export default class UsersApi{
  static fetchAllUsers() {
    return new Promise((resolve, reject) => {
      fetch(url_userGetAll, {
        method: 'GET',
        headers:{
          "authorization":"Bearer " + token
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject({message:'Błąd - status: ' + res.status})
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error =>{
          reject({message: error.toString()})
        })
    });
  }
  static fetchOneUser(userId) {
    return new Promise((resolve, reject) => {
      fetch(url_userGetOne + userId, {
        method:"GET",
        headers: {
          "authorization":"Bearer " + token
        }
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject({message:'Błąd - status: ' + res.status})
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error =>{
          reject({message: error.toString()})
        })
    });
  }
  static registerUser(username, password,email) {
    return new Promise((resolve, reject) => {
    fetch(url_userRegister,{
      mode:'cors',
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          email: email.trim()
      })
  })
      .then(res =>{
          if(res.ok){
              return res.json()
          }else{
            reject({message:'Błąd - status: ' + res.status})
          }
      })
      .then(data =>{
        resolve(data)
      })
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
  static loginUser(username, password) {
    return new Promise((resolve, reject) => {
    fetch(url_userLogin,{
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username.trim(),
          password: password.trim()
      })
  })
      .then(res =>{
          if(res.ok){
              return res.json()
          }else{
            reject({message:'Błąd - status: ' + res.status})
          }
      })
      .then(data =>{
        resolve(data)
      })
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
  static codeUser(code) {
    return new Promise((resolve, reject) => {
    fetch(url_userCode,{
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          code: code.trim()
      })
  })
      .then(res =>{
          if(res.ok){
              return res.json()
          }else{
            reject({message:'Błąd - status: ' + res.status})
          }
      })
      .then(data =>{
        resolve(data)
      })
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
  static deleteDataBase() {
    return new Promise((resolve, reject) => {
    fetch(url_userDeleteDatabase,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
  })
  .then(res =>{
    if(res.ok){
        return res.json()
    }else{
      reject({message:'Błąd - status: ' + res.status})
    }
})
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
}