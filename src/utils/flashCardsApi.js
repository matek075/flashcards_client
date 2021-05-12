import Auth from './auth'
import {url_getByType, url_createOne} from './url.js'

const token = Auth.getToken()

export default class FlashCardsApi{
    static fetchFlashCards(type) {
        return new Promise((resolve, reject) => {
          fetch(url_getByType + type, {
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

      static createOne(language,type,question,answear) {
        return new Promise((resolve, reject) => {
        fetch(url_createOne,{
          method:"POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            language:language.trim(),
            type: type.trim(),
            question: question.trim(),
            answear: answear.trim()
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
    
}