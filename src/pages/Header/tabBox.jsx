import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {useTabNum} from '../../store/atom'
import style from './tabBox.module.css'

function TabBox(){


    const [tabNum, setTabNum] = useRecoilState(useTabNum);
    const [tabArr, setTabArr] = useState(['그래프','스탯','빈칸3']);
    

    return(
        <div className={style.tabBox_main}>
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