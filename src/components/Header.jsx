import React from "react";
import style from './Header.module.css';
import TabBox from  '../pages/Header/tabBox'
import MainLogo from "../pages/Header/MainLogo";
import LoginTab from "../pages/Header/LoginTab";

function header(){
    return(
        <div className={style.header_main}>
            <MainLogo></MainLogo>
            <TabBox></TabBox>
            <LoginTab></LoginTab>
        </div>
    )
}

export default header;