import s from "./Dialogs.module.css";
import React from "react";
import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)
