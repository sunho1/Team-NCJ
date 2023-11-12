import React from "react";
import { useRecoilState } from "recoil";
import {useTabNum, useRenderCnt} from '../store/atom'
import style from './Main.module.css'
import SeasonGraph from "../pages/main/SeasonGraph";
import Stat from "../pages/main/Stat";


function Main(){
    const [tabNum, setTabNum] = useRecoilState(useTabNum);
    const [renderCnt , setRenderCnt] = useRecoilState(useRenderCnt);

    return(
        <div className={style.main_main}>
            렌더링 횟수 : {renderCnt}
            {tabNum == 0 && <SeasonGraph/>}
            {tabNum ==1 && <Stat/>}
        </div>
    )
}

export default Main;