import React from "react";
import classNames from "classnames/bind";
import styles from "./LoginPage.module.scss";
import Logo from "~/components/Logo";
import Link from "next/link";
import Image from "next/image";
import images from "~/assets/images";

type Props = {};

const cx = classNames.bind(styles);

const LoginPage = function ({}) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <header className={cx("header")}>
                    <Logo />
                    <div className={cx("social-media")}>
                        <Link className={cx("social-media-link")} href={"/"}>
                            <Image
                                className={cx("social-media-image")}
                                src={images.x}
                                alt=""
                            />
                        </Link>
                        <Link className={cx("social-media-link")} href={"/"}>
                            <Image
                                className={cx("social-media-image")}
                                src={images.x}
                                alt=""
                            />
                        </Link>
                        <Link className={cx("social-media-link")} href={"/"}>
                            <Image
                                className={cx("social-media-image")}
                                src={images.x}
                                alt=""
                            />
                        </Link>
                        <Link className={cx("social-media-link")} href={"/"}>
                            <Image
                                className={cx("social-media-image")}
                                src={images.x}
                                alt=""
                            />
                        </Link>
                    </div>
                </header>

                <footer className={cx("footer")}>
                    <p className={cx("")}>
                        {"@ 2024 trustorstudio foudation "}
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;
