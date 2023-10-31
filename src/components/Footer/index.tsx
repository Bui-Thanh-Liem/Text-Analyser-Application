//
import { FC } from "react";
import classNames from "classnames/bind";
import { Row, Col } from "antd";
import { PhoneFilled } from "@ant-design/icons";

//
import styles from "./index.module.scss";

//
const cx = classNames.bind(styles);

const Footer: FC = () => {
    return (
        <div className={cx("footer")}>
                <Row
                    align={"middle"}
                    justify={"center"}
                    className={cx("container")}
                >
                    <Col span={9} xs={6} className={cx("footer-element")}>
                        <p className={cx("footer-title")}>Build by Bui-Thanh-Liem</p>
                    </Col>
                    <Col span={9} xs={12} className={cx("footer-element")}>
                        <a href="tel:+0365255073">
                            <PhoneFilled  />
                        </a>
                    </Col>
                </Row>
        </div>
    );
};

export default Footer;
