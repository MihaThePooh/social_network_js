import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} })

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data
            dispatch(setAuthUserData(id, login, email))
        } else if (response.data.resultCode === 1) {
            return alert(response.data.messages[0])
        }
    })
}

export default authReducer