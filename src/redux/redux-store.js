import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduсer from "./profile-reduсer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReduсer from "./sidebar-reduсer";
import usersReduсer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReduсer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReduсer,
    usersPage: usersReduсer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store