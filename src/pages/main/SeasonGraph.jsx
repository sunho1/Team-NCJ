import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRenderCnt, useTabNum} from '../../store/atom'

function SeasonGraph(){

    const [tabNum, setTabNum] = useRecoilState(useTabNum);
    const [renderCnt , setRenderCnt] = useRecoilState(useRenderCnt);

    useEffect(()=>{
        console.log('그래프입니다');
        setRenderCnt(renderCnt+1);
    },[tabNum])

    return(
        <div>
            그래프입니다
        </div>
    )
}


export default SeasonGraph;