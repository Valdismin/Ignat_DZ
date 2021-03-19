import React from "react";
import classNames from './Message.module.css';

type IProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: IProps) {
    const {avatar, message, name, time} = props;
    return (
        <div className={classNames.container}>
            <img src={avatar} alt="avatar"/>
            <div className={classNames.message_box}>
                <div>
                    <p className={classNames.author}>{name}</p>
                    <p className={classNames.message}>{message}</p>
                </div>
                <div>
                    <p className={classNames.time}>{time}</p>
                </div>
            </div>

        </div>
    );
}

export default Message;
