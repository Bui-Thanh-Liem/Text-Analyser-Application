//
import { FC, useContext } from "react";
import classNames from "classnames/bind";
import { Row, Col } from "antd";

//
import styles from "./index.module.scss";
import Boxresult from "../BoxResult";
import AnalyserBox from "../AnalyserBox";
import TextArea from "../TextArea";
import AnalyContext from "../../context";

//
const cx = classNames.bind(styles);

const Content: FC = () => {
    //
    const data = useContext(AnalyContext);

    return (
        <Row justify={"center"} className={cx("content")}>
            <Col span={18} className={cx("container")}>
                <Boxresult>
                    {data &&
                        data.top.map((item) => (
                            <Col key={item.id}>
                                <AnalyserBox
                                    title={item.title}
                                    value={item.value}
                                />
                            </Col>
                        ))}
                </Boxresult>
                <TextArea />
                <Boxresult>
                    {data &&
                        data.bottom.map((item) => (
                            <AnalyserBox
                                direction
                                key={item.id}
                                title={item.title}
                                value={item.value}
                            />
                        ))}
                </Boxresult>
            </Col>
        </Row>
    );
};

export default Content;
