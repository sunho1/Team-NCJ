import React from "react";
import style from "./LoginTab.module.css"

function LoginTab(){

    // const boxArr = ['Log In','Sign Up' ,'LogOut']

    return(
        <div className={style.login_main}>
            <div className={style.login_logIn}>

            </div>
            <div className={style.login_logOut}>

            </div>
            <div className={style.login_signUp}>

            </div>
        </div>
    )
}

export default LoginTab;