//
import { FC } from "react";
import { Row, Col } from "antd";
import {
    FacebookFilled,
    InstagramFilled,
    GithubFilled,
} from "@ant-design/icons";
import classNames from "classnames/bind";

//
import styles from "./index.module.scss";
import IconLink from "../IconLink";

//
const cx = classNames.bind(styles);

const Header: FC = () => {
    return (
        <header className={cx("header")}>
            <Row
                align={"middle"}
                justify={"center"}
                className={cx("container")}
            >
                <Col span={9} xs={6} className={cx("header-element")}>
                    <p className={cx("header-title")}>Text analyser</p>
                </Col>
                <Col span={9} xs={12} className={cx("header-element")}>
                    <IconLink
                        icon={<FacebookFilled />}
                        link="https://www.facebook.com/profile.php?id=100010395697006"
                    />
                    <IconLink
                        icon={<InstagramFilled />}
                        link="https://www.instagram.com/bui_thanh_liem8120/"
                    />
                    <IconLink
                        icon={<GithubFilled />}
                        link="https://github.com/Bui-Thanh-Liem"
                    />
                </Col>
            </Row>
        </header>
    );
};

export default Header;
