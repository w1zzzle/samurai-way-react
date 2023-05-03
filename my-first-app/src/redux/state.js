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
            ]
        }
    
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
                    this._state.profilePage.newPostText = action.newText
        this._callSubscriber(this._state);
        }
    }
}


export default store;
window.store = store;