import React from "react";
import Message from "./Message";

const messageData = {
    avatar: "http://avatars.mds.yandex.net/get-zen_doc/44645/pub_5ceadf3fdd00af00b25af3a5_5ceadfb5d2421400b45887a5/scale_1200",
    name: "Fitkovich Nikolai",
    message: "Ну че Игнат, Аниме?)))",
    time: "22:00",
};

function HW1() {
    return (
        <React.Fragment>
            <Message
                avatar={ messageData.avatar }
                name={ messageData.name }
                message={ messageData.message }
                time={ messageData.time }
            />
        </React.Fragment>
    );
}

export default HW1;
