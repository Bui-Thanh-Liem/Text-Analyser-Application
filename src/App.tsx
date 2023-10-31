//
import classNames from "classnames/bind";
import { FC, useState } from "react";

//
import styles from "./App.module.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AnalyContext, {analyContextType} from "./context";

//
const cx = classNames.bind(styles);

const App:FC = () => {
    //
    const [words, setWords] = useState<number>(0);
    const [characters, setCharacters] = useState<number>(0);
    const [sentences, setSentences] = useState<number>(0);
    const [paragraphs, setParagraphs] = useState<number>(0);
    const [pronouns, setPronouns] = useState<number>(0);
    const [readingTime, setReadingTime] = useState<number | string>(0);
    const [longestWord, setLongestWord] = useState<string>("-");

    const data:analyContextType = {
        top: [
            {
                id: 1,
                title: "Words",
                value: words,
            },
            {
                id: 2,
                title: "Characters",
                value: characters,
            },
            {
                id: 3,
                title: "Sentences",
                value: sentences,
            },
            {
                id: 4,
                title: "Paragraphs",
                value: paragraphs,
            },
            {
                id: 5,
                title: "Pronouns",
                value: pronouns,
            },
        ],
        bottom: [
            {
                id: 1,
                title: "Average Reading Time:  ",
                value: readingTime,
            },
            {
                id: 2,
                title: "Longest word:  ",
                value: longestWord,
            },
        ],
        actions: {
            setWords,
            setCharacters,
            setSentences,
            setParagraphs,
            setPronouns,
            setReadingTime,
            setLongestWord,
        },
    };

    return (
        <div className={cx("app")}>
            <div className={styles.container}>
                <AnalyContext.Provider value={data}>
                    <Header />
                    <Content />
                    <Footer />
                </AnalyContext.Provider>
            </div>
        </div>
    );
}

export default App;
