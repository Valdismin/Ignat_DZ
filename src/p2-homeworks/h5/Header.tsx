import React from "react";
import {NavLink} from "react-router-dom"
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.headerComp}>
            <div className={s.container}>
                <div className={s.navLinks}>
            <NavLink to={'/PRE_JUNIOR'} className={s.navLink} activeClassName={s.active}> mainPage </NavLink>
            <NavLink to={'/HW1'} className={s.navLink} activeClassName={s.active}> HW1 </NavLink>
            <NavLink to={'/HW2'} className={s.navLink} activeClassName={s.active}> HW2 </NavLink>
            <NavLink to={'/HW3'} className={s.navLink} activeClassName={s.active}> HW3 </NavLink>
            <NavLink to={'/HW4'} className={s.navLink} activeClassName={s.active}> HW4 </NavLink>
            <NavLink to={'/HW6'} className={s.navLink} activeClassName={s.active}> HW6 </NavLink>
            <NavLink to={'/HW7'} className={s.navLink} activeClassName={s.active}> HW7 </NavLink>
            <NavLink to={'/HW8'} className={s.navLink} activeClassName={s.active}> HW8 </NavLink>
            <NavLink to={'/HW9'} className={s.navLink} activeClassName={s.active}> HW9 </NavLink>
            <NavLink to={'/HW10'} className={s.navLink} activeClassName={s.active}> HW10 </NavLink>
            <NavLink to={'/HW11'} className={s.navLink} activeClassName={s.active}> HW11 </NavLink>
            <NavLink to={'/HW12'} className={s.navLink} activeClassName={s.active}> HW12 </NavLink>
            <NavLink to={'/HW13'} className={s.navLink} activeClassName={s.active}> HW13 </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
