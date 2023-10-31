//
import { FC, ReactNode } from "react";
import classNames from "classnames/bind";

//
import styles from "./index.module.scss";

// 
const cx = classNames.bind(styles);


interface props {
    icon? : ReactNode;
    link?: string;
}

const IconLink:FC<props> = (props) => {
    const { icon, link } = props;
    
    return (
        <div className={cx("iconLink")}>
            <a href={link} target="_blank" className={cx("container")}>
                {icon}
            </a>
        </div>
    )
}

export default IconLink;