import dialogsReducer from "./dialogsReducer"
import navbarReducer from "./navbarReducer"
import profileReducer from "./profileReducer"


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi", likesCount: 3},
                { id: 2, message: "How are you", likesCount: 2 },
                { id: 3, message: "You wanna eating?", likesCount: 6 },
            ],
            newPostText: 'linq'
        },
    
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dima", avatar: <img src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"></img>},
                { id: 2, name: "Maitzwile", avatar: <img src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"></img> },
                { id: 3, name: "Mama", avatar: <img src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"></img> },
                { id: 4, name: "Papa", avatar: <img src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"></img> },
                { id: 5, name: "ElonMask", avatar: <img src="https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png"></img> },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you" },
                { id: 3, message: "You wanna eating?" },
            ],
            newMessageBody: ''
        },
        navbar: {}
    
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)
        
        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;