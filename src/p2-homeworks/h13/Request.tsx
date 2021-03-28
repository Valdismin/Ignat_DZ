import React, {useState} from "react"
import {requestAPI} from "./RequestAPI";
import s from "./HW13.module.css"



export const Request = () => {
    const [checkStatus,setCheckStatus] = useState(false)
    const [requestResult, setRequestResult] = useState("Сделайте запрос")

    const onCheckBoxChange = () => {
        setCheckStatus(!checkStatus)
    }
    const sendStatus = () => {
        requestAPI.post(checkStatus).then(data => {
            setRequestResult(data)
        })
    }


    return <div className={s.fullRequest}>
       <div> <input type="checkbox" onChange={onCheckBoxChange}/>Сменить статус</div>
        <button onClick={sendStatus}>Отправить статус</button>
        <div>{requestResult}</div>
    </div>
}