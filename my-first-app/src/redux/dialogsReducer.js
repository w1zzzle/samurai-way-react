const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){

        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            }      

        case SEND_MESSAGE:
            let body = state.newMessageBody 
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: body }]
            }        
        
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE }) 

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer