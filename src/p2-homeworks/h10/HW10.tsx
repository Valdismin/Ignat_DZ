import React from "react";
import preloader from './Spinner-1s-200px.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {Button, LinearProgress} from "@material-ui/core";
import s from "./HW10.module.css"

function HW10() {

    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    const dispatch =useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>{
            dispatch(loadingAC(false))
        },2000)
    };

    return (
        <div className={s.main}>


            {loading
                ? (
                    <div><img src={preloader} alt=""/></div>
                ) : (
                    <div>
                        <Button onClick={setLoading} color='primary' variant="contained">set loading...</Button>
                    </div>
                )
            }

        </div>
    );
}

export default HW10;
