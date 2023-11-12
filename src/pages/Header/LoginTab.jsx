import React from "react";
import style from "./LoginTab.module.css"
import { useRecoilState } from "recoil";
import { useRenderCnt } from "../../store/atom";

function LoginTab(){

    // const boxArr = ['Log In','Sign Up' ,'LogOut']
    const [renderCnt , setRenderCnt] = useRecoilState(useRenderCnt);

    return(
        <div className={style.login_main}>
            <button onClick={()=>{
                setRenderCnt(0);
            }}>렌더링 리셋</button>

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