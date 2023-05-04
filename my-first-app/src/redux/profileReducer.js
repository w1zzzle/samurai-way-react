const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, message: "Hi", likesCount: 3},
        { id: 2, message: "How are you", likesCount: 2 },
        { id: 3, message: "You wanna eating?", likesCount: 6 },
    ],
    newPostText: 'linq'
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type){

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        
        default:
             return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) // вариант стрелочной функции если 1 элемент

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer