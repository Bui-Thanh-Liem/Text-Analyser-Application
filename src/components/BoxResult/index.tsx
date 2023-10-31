//
import { FC, ReactNode } from "react";
import classNames from "classnames/bind";
import { Row } from "antd";

//
import styles from "./index.module.scss";
/**
 * {
 *       boxResult: "_boxResult_1mm02_1",
 *       container: "_container_1mm02_1",
 * }
 * */

//
const cx = classNames.bind(styles);

//
interface props {
    children: ReactNode;
}

const Boxresult: FC<props> = (props) => {
    const { children } = props;

    return (
        <Row
            wrap={true}
            justify="space-around"
            align={"middle"}
            className={cx("boxResult")}
        >
            {children}
        </Row>
    );
};

export default Boxresult;
