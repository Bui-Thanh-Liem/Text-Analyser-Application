//
import { FC } from "react";
import classNames from "classnames";

//
import styles from "./index.module.scss";


//
interface props {
    title: string;
    value: string | number;
    direction?: boolean;
}

const AnalyserBox:FC<props> = (props) => {
    const { title = "Empty", value = 0 , direction} = props;
    
    return (
        <div className={styles.analyserBox}>
            <div className={classNames(styles.container, {
                [styles.vertical]: direction
                            })}
            >
                <p className={styles.title}>{title}</p>
                <p className={styles.value}>{value}</p>             
            </div>
        </div>
    )
}

export default AnalyserBox;