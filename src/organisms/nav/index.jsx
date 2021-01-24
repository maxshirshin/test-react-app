import { useState } from "react";
import cx from "classnames";

import Icon from "./../../components/icon";
import Menu from "./../menu/index";
import "./index.scss";

export default function Nav() {
  const [isCollapsed, toggleCollapsed] = useState(false);

  return (<div className={cx("b-nav", {"b-nav--collapsed": isCollapsed})}>
    <div className="b-nav__menu">
      <div className="b-nav__toggle" onClick={() => toggleCollapsed(!isCollapsed)}><Icon type="hamburger" /></div>
      <Menu collapsed={isCollapsed} />
    </div>
    <div className="b-nav__header">
      <Icon type="home"/>
    </div>
  </div>);
}