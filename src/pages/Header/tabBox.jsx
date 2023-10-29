import React from "react";
import { useRecoilState } from "recoil";
import {useTabNum} from '../../store/atom'
import style from './tabBox.module.css'

function TabBox(){


    const [tabNum, setTabNum] = useRecoilState(useTabNum);

    return(
        <div className={style.main}>
            안녕하세요 {tabNum}
            <button onClick={()=>{
                setTabNum(tabNum+1);
            }}>눌러볼까요</button>
        </div>
    )
}

export default TabBox;