import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(100);

    const setMinValue = (newMinValue: number): void => {
        setValue1(newMinValue)
    }

    const handleChange = (newValue: number | number[]): void => {
        if (typeof newValue === "object") {
            setValue1(newValue[0])
            setValue2(newValue[1])
        }
    }

    let value = [value1, value2]

    return (
        <div className={s.main}>
            <div className={s.HW11}>
                <div className={s.header}>homeworks 11</div>
            <div className={s.SuperRange}>

                <SuperRange
                    onChangeRange={setMinValue}
                    value1={value1}/>

            </div>

            <div className={s.SuperDoubleRange}>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={handleChange}
                    value={value}
                />
                <span>{value2}</span>
            </div>
            </div>

        </div>
    );
}

export default HW11;
