import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes:Array<string> = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType>(state => state.themeRed.themes) as string
    const dispatch = useDispatch()


    const onChangeCallback = (option: string): void => {
        if (option === 'dark') {
            dispatch({type: 'SET-DARK-THEME'})
        }
        if (option === 'red') {
            dispatch({type: 'SET-RED-THEME'})
        }
        if (option === 'some') {
            dispatch({type: 'SET-SOME-THEME'})
        }
    }

    return (
        <div className={s[theme]}>
            <div className={s[theme + '-text']}>
                 homeworks 12
            </div>
            <div>
                <SuperSelect
                onChangeOption={onChangeCallback}
                options={themes}/>
            </div>
        </div>
    );
}

export default HW12;
