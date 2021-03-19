import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Slider} from "@material-ui/core";



type SuperDoubleRangePropsType = {
    onChangeRange: (newValue: number | number[]) => void
    value: Array<number>
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (e: ChangeEvent<{}>,newValue:number | number[]):void => {
        onChangeRange(newValue);

    }

    return (
        <>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
