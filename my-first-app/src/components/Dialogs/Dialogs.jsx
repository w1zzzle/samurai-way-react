import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> );

    let messagesElements = props.state.messages.map( (m) => <Message message={m.message} /> );

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;
