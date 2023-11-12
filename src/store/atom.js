import { atom } from "recoil";

export const useTabNum = atom({
    key : 'tabNum',
    default : 0
});

export const useRenderCnt = atom({
    key: 'renderCnt',
    default : 0
})