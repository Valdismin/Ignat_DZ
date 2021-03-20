import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = s.error

    return (
        <div className={s.main2}>
            <div className={s.inputPlusButton}>
            <input value={name} onChange={setNameCallback} className={error ? inputClass : ""}/>
            <button onClick={addUser}>Add User</button>
            </div>
            {error && <span className={s.errorText}>{error}</span>}
            <br/>
            <span>Добавлено пользователей:{totalUsers}</span>
        </div>
    );
}

export default Greeting;
