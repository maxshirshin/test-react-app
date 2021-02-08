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
    const { children, url, title, parents = [] } = props;
    const [isExp, setExp] = useState(false);
    const isParent = children && children.length > 0;

    return (<div
        className="b-menu__row">
        {isParent && <div
            onClick={() => setExp(!isExp)}
            title={isExp ? "collapse" : "expand" }
            className={cx("b-menu__toggle", {
                "b-menu__toggle--expanded": isExp
            })}
        />}
        <a className={cx("b-menu__link", {
            "b-menu__link--current": (document.location.pathname === url) || parents.includes(url)
        })} href={url}>
            <Icon type={urlToIconMap[url] || defaultIcon} className="b-menu__icon"/>
            <span title={title} className="b-menu__text">{title}</span>
        </a>{isExp && children && children.length > 0 && children.map((child, i) => <Row
           parents={parents}
           key={child.url + i}
           {...child} />)}
    </div>);
}

function isCurrent(url) {
    return document.location.pathname === url;
}

export default function Menu(props) {
    const { data, collapsed = true } = props;

    // walk the tree
    // each time we go deeper, collect the parent nodes (or their urls)
    // once we hit the node which matches the top level page URL, stop and
    // add mark or the parent urls as highlights
    function walk(node, parents = []) {
        if (isCurrent(node.url)) {
            parentsToHighlight = parents;
        }

        if (node.children && node.children.length) {
            const newParents = [...parents, node.url];
            node.children.forEach(n => walk(n, newParents));
        }
    }
    let parentsToHighlight = [];
    data.forEach(node => {
        walk(node, []);
    })

    console.log(parentsToHighlight);

    return (<nav
        className={cx("b-menu", {
            [`b-menu--collapsed`]: !!collapsed
        })}>{data.map((row, i) => <Row parents={parentsToHighlight} key={row.url + i} {...row} />)}</nav>);
}