//
import { FC, useContext, useEffect, useState } from "react";
import { Input } from "antd";

//
import styles from "./index.module.scss";
import AnalyContext from "../../context";

const TextArea: FC = () => {
    //
    const [textAreaValue, setTextAreaValue] = useState("");

    //
    const data = useContext(AnalyContext);

    // Handle logic
    const countWords = (str: string): number => {
        str = str.trim();
        if(str === "") {
            return 0;
        }
        const wordArr: string[] = str.split(/\s+/);
        return wordArr.length;
    };

    const countSentances = (string: string): number => {
        string = string.trim();
        if (string === "") {
            return 0;
        }
        const words: string[] = string.split(".");
        return words.length - 1;
    };

    const countParagraphs = (string: string): number => {
        if (string === "") {
            return 0;
        }
        const words: string[] = string.split("\n");
        return words.length;
    };

    const countPronouns = (string: string): number => {
        const pronouns: string[] = [
            "I",
            "You",
            "He",
            "She",
            "It",
            "We",
            "They",
            "Me",
            "Him",
            "Her",
            "Us",
            "Them",
            "My",
            "Your",
        ];
        string = string.trim();
        if (string === "") {
            return 0;
        }

        const words: string[] = string.split(" ");

        for (const i in words) {
            words[i] = words[i].toLowerCase();
        }
        
        let num: number = 0;
        for (const pro of pronouns) {
            if (words.includes(pro.toLocaleLowerCase())) {
                num++;
            }
        }

        return num;
    };

    const longestWord = (string: string): string => {
        string = string.trim();
        if (string === "") {
            return "-";
        }
        const words: string[] = string.split(/\s+/);
        let indexMaxLenthWord: number = 0;

        for (const i in words) {
            if (words[i].length >= words[indexMaxLenthWord].length) {
                indexMaxLenthWord = Number(i);
            }
        }
        return words[indexMaxLenthWord].slice(0, 25);
    };

    //
    useEffect(() => {
        //
        type func = (str: string) => number;
        const averageReading = (func: func, str: string): number => {
            const words: number = func(str);

            if (words < 200) {
                return 0;
            } else if (words > 200 && words < 300) {
                return 1;
            } else if (words > 250 && words < 500) {
                return 2;
            } else {
                return 3;
            }
        };
        
        if(data) {
            const {actions} = data;
            actions.setWords(countWords(textAreaValue));
            actions.setCharacters(textAreaValue.length);
            actions.setSentences(countSentances(textAreaValue));
            actions.setParagraphs(countParagraphs(textAreaValue));
            actions.setPronouns(countPronouns(textAreaValue));
            actions.setLongestWord(longestWord(textAreaValue));
            const time: number = averageReading(countWords, textAreaValue);
            actions.setReadingTime(`~${time} minutes`);
        }
    }, [textAreaValue, data]);

    return (
        <div className={styles.textArea}>
            <div className={styles.container}>
                <Input.TextArea
                    className={styles.textAreaField}
                    spellCheck={false}
                    rows={17}
                    placeholder="Enter Text here..."
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TextArea;
