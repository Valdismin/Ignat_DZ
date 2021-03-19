import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import HW1 from "../h1/HW1";
import HW2 from "../h2/HW2";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import HW6 from "../h6/HW6";
import HW7 from "../h7/HW7";
import HW8 from "../h8/HW8";
import HW9 from "../h9/HW9";
import HW10 from "../h10/HW10";
import HW11 from "../h11/HW11";
import HW12 from "../h12/HW12";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    // add paths
}

function Routes() {
    return (
        <div>
            <Switch>
                в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR
                exact нужен чтоб указать полное совподение (что после "/" ничего не будет)
                <Route path={"/"} exact render={() => <Redirect to={"/PRE_JUNIOR"}/>}/>
                <Route path={"/PRE_JUNIOR"} render={() => <PreJunior/>}/>
                <Route path={"/HW1"} render={() => <HW1/>}/>
                <Route path={"/HW2"} render={() => <HW2/>}/>
                <Route path={"/HW3"} render={() => <HW3/>}/>
                <Route path={"/HW4"} render={() => <HW4/>}/>
                <Route path={"/HW6"} render={() => <HW6/>}/>
                <Route path={"/HW7"} render={() => <HW7/>}/>
                <Route path={"/HW8"} render={() => <HW8/>}/>
                <Route path={"/HW9"} render={() => <HW9/>}/>
                <Route path={"/HW10"} render={() => <HW10/>}/>
                <Route path={"/HW11"} render={() => <HW11/>}/>
                <Route path={"/HW12"} render={() => <HW12/>}/>
                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
