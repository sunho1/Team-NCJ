import React from "react";
import style from './Header.module.css';
import TabBox from  '../pages/Header/tabBox'
import MainLogo from "../pages/Header/MainLogo";

function header(){
    return(
        <div className={style.header_main}>
            <MainLogo></MainLogo>
            <TabBox></TabBox>
        </div>
    )
}

export default header;