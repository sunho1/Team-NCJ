import React from "react";
import style from './Header.module.css';
import TabBox from  '../pages/Header/tabBox'

function header(){
    return(
        <div className={style.header_main}>
            <TabBox></TabBox>
        </div>
    )
}

export default header;