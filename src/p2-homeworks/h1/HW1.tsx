import React from "react";
import Message from "./Message";
import s from"./HW1.module.css"

const messageData = {
    avatar: "http://avatars.mds.yandex.net/get-zen_doc/44645/pub_5ceadf3fdd00af00b25af3a5_5ceadfb5d2421400b45887a5/scale_1200",
    name: "Fitkovich Nikolai",
    message: "Ну че Игнат, Аниме?)))",
    time: "22:00",
};

function HW1() {
    return (
        <div className={s.main}>
            <Message
                avatar={ messageData.avatar }
                name={ messageData.name }
                message={ messageData.message }
                time={ messageData.time }
            />
        </div>
    );
}

export default HW1;
