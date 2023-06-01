import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: "Hi", likesCount: 3},
        { id: 2, message: "How are you", likesCount: 2 },
        { id: 3, message: "You wanna eating?", likesCount: 6 },
    ],
    newPostText: 'linq',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type){

        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return  {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE:{
            return  {
                ...state,
                profile: action.profile
            }
        } 
        default:
            return state
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) // вариант стрелочной функции если 1 элемент
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data))
    });
} 

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer