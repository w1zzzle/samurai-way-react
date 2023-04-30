import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi", likesCount: 3},
            { id: 2, message: "How are you", likesCount: 2 },
            { id: 3, message: "You wanna eating?", likesCount: 6 },
        ],
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

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;