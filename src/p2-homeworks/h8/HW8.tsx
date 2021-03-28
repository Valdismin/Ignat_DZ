import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from"./HW8.module.css"

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
] as Array<UserType>

export type UserType = {_id: number, name: string, age: number}

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <div className={s.string}>{p.name}, {p.age}</div>
        </div>
    ))

    const sortUpName = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDownName = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))

    return (
        <div className={s.main}>
            <div>{finalPeople}</div>
            <div className={s.buttons}>
                <div ><SuperButton onClick={sortUpName}>Sort up name</SuperButton></div>
                <div><SuperButton onClick={sortDownName}>Sort down name</SuperButton></div>
                <div><SuperButton onClick={check18}>Check 18</SuperButton></div>
            </div>
        </div>
    );
}

export default HW8;
