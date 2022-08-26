import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
    addPost: () => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogElement = props.state.dialogs.map (d =>
        <DialogItem name = {d.name} id = {d.id} key={d.id} /> );
    let messagesElements = props.state.messages.map (m => <Message message={m.message} key={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;