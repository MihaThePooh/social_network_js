import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" />
            { props.isAuth ?
                <span className={s.loginBlock}>{props.login}</span> :
                <NavLink to={'/login'}><span className={s.loginBlock}>LogIn</span></NavLink> }
        </header>
    )
}

export default Header