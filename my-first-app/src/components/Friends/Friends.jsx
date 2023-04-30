import state from "../../redux/state"
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import s from "./Friends.module.css"

const Friends= (props) => {

    let friendsElements = state.dialogsPage.dialogs.map( (d) => <DialogItem name={d.name} id={d.id} avatar={d.avatar} /> );

    return(
        <div>
            Friends
            <div className={s.friendsWrapper}>
                { friendsElements }
            </div>
        </div>
    )
}

export default Friends