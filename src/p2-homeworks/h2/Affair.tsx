import React from "react";
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {Button} from "@material-ui/core";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id:number) => {props.deleteAffairCallback(id)};// need to fix

    return (
        <div >
            <div className={s.affairBlock}>
                <div className={s.affairName}> {props.affair.name} </div>
                <Button onClick={() => deleteCallback(props.affair._id)}><DeleteIcon /></Button>
            </div>

        </div>
    );
}

export default Affair;
