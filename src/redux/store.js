import profileReduсer from "./profile-reduсer";
import {dialogsReducer} from "./dialogs-reducer";
import sidebarReduсer from "./sidebar-reduсer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi! =)', likesCount: 12},
                {id: 2, message: 'Second post', likesCount: 23}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Димыч'},
                {id: 2, name: 'Андрей'},
                {id: 3, name: 'Света'},
                {id: 4, name: 'Саша'},
                {id: 5, name: 'Валера'},
                {id: 6, name: 'Маша'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("!!!")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReduсer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReduсer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store

window.store = store
