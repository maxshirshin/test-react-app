import { useState } from "react";
import Icon from "./../../components/icon";
import "./index.scss";
import cx from "classnames";

const urlToIconMap = {
    "/orders": "cart",
    "/tickets": "mail",
    "/management": "box"
};
const defaultIcon = "disc";

function Row(props) {
    const { children, url, title } = props;
    const [isExp, setExp] = useState(false);
    const isParent = children && children.length > 0;

    return (<div
        className="b-menu__row">
        {isParent && <div
            onClick={() => setExp(!isExp)}
            className={cx("b-menu__toggle", {
                "b-menu__toggle--expanded": isExp
            })}
        />}
        <a className={cx("b-menu__link", {
            "b-menu__link--current": document.location.pathname === url
        })} href={url}>
            <Icon type={urlToIconMap[url] || defaultIcon} className="b-menu__icon"/>
            <span title={title} className="b-menu__text">{title}</span>
        </a>{isExp && children && children.length > 0 && children.map(child => <Row {...child} />)}
    </div>);
}

export default function Menu(props) {
    const { data } = props;

    return (<div
        className={cx("b-menu", {
            [`b-menu--collapsed`]: !!props.collapsed
        })}>{data.map(row => <Row {...row} />)}</div>);
}