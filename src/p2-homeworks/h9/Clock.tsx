import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton"
import s from "./Clock.module.css"

export function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)
    };

    let twoDigits = (num: number) => num < 10 ? "0" + num : num

    //const stringTime = {date.getHours()} : {date.getMinutes()} {date.getSeconds()}
    const stringDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className={s.ClockWrapper}>
                    <div>
                    <span>{twoDigits(date.getHours())}</span>
                    </div>
                    :
                    <div><span>{twoDigits(date.getMinutes())}</span></div>
                    :
                    <div><span>{twoDigits(date.getSeconds())}</span></div>
                </div>
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

