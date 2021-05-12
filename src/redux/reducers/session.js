import {SET_USER_DATA, SET_USER_LOGGED, SET_USER_ADMIN} from '../types/session'

const initialState = {
    logged: false,
    isAdmin: false,
    user: {}
}

export default (state = initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state, user: action.user
            }
        case SET_USER_LOGGED:
            return{
                ...state, logged: true
            }
        case SET_USER_ADMIN:
            return{
                ...state, isAdmin: action.isAdmin
            }
        default:
            return state
    }
}