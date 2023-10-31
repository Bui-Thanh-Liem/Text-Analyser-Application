import { createContext, Dispatch, SetStateAction } from "react";

export type topType = {
    id: number,
    title: string,
    value: number | string,
};

export type bottomType = {
    id: number,
    title: string,
    value: number | string,
};

export type actionType = {
    setWords: Dispatch<SetStateAction<number>>,
    setCharacters: Dispatch<SetStateAction<number>>,
    setSentences: Dispatch<SetStateAction<number>>,
    setParagraphs: Dispatch<SetStateAction<number>>,
    setPronouns: Dispatch<SetStateAction<number>>,
    setReadingTime: Dispatch<SetStateAction<number | string>>,
    setLongestWord: Dispatch<SetStateAction<string>>,
};


export interface analyContextType {
    top: topType[];
    bottom: bottomType[];
    actions: actionType;
}

const AnalyContext = createContext< analyContextType | undefined >(undefined);

export default AnalyContext;