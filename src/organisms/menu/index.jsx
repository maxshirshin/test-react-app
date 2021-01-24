import Icon from "./../../components/icon";
import "./index.scss";
import cx from "classnames";
import data from "./navigation.json";

function getRow(node) {
    const { children, url, title } = node;

    return (<div
        onClick={(e) => {
            e.currentTarget.classList.contains("b-menu__row--expanded") ?
                e.currentTarget.classList.remove("b-menu__row--expanded") :
                e.currentTarget.classList.add("b-menu__row--expanded");
        }}
        className={cx("b-menu__row", {"b-menu__row--parent": children && children.length > 0})}><a className="b-menu__link" href={url}>
            <Icon type="home" className="b-menu__icon"/>
            <span className="b-menu__text">{title}</span>
        </a>{children && children.length > 0 && children.map(child => getRow(child))}
    </div>);
}

export default function Menu(props) {
    return (<div
        className={cx("b-menu", {
            [`b-menu--collapsed`]: !!props.collapsed
        })}>{data.map(row => getRow(row))}</div>);
}