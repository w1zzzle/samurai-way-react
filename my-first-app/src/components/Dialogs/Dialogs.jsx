import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( (d) => <DialogItem name={d.name} key={d.id} id={d.id} avatar={d.avatar} /> );
    let messagesElements = state.messages.map( (m) => <Message message={m.message} key={m.id} /> );
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <textarea value = { newMessageBody } 
                                onChange = { onNewMessageChange }
                                placeholder = "Enter your message" >
                    </textarea>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
