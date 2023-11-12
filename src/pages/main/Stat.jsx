import React,{useEffect} from "react";
import { useRecoilState } from "recoil";
import { useRenderCnt, useTabNum} from '../../store/atom'

function Stat(){

    const [tabNum, setTabNum] = useRecoilState(useTabNum);
    const [renderCnt , setRenderCnt] = useRecoilState(useRenderCnt);

    useEffect(()=>{
        console.log('스탯입니다');
        setRenderCnt(renderCnt+1);
    },[tabNum])

    return(
        <div>
            스탯창입니다
        </div>
    )
}

export default Stat;