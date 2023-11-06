import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {useTabNum} from '../../store/atom'
import style from './tabBox.module.css'

function TabBox(){


    const [tabNum, setTabNum] = useRecoilState(useTabNum);
    const [tabArr, setTabArr] = useState(['하나','둘','셋']);
    

    return(
        <div className={style.tabBox_main}>
            {tabNum}
            {tabArr.map((tab, idx)=>{
                return(<div className={style.tabBox_item} key={idx} onClick={()=>{
                    setTabNum(idx);
                }}>
                    {tab}
                </div>)
            })}
        </div>
    )
}

export default TabBox;