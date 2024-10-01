import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import images from "~/assets/images";
import router from "~/configs/router.config";
import styles from "./Logo.module.scss";

type Props = {};

const cx = classNames.bind(styles);

const Logo = function ({}: Props) {
    return (
        <Link className={cx("wrapper")} href={router.home}>
            <Image className={cx("image")} src={images.logo} alt="Logo" />
            <span className={cx("name")}>Generator</span>
        </Link>
    );
};

export default Logo;
