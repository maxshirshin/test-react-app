import { useState, useEffect } from "react";
import cx from "classnames";

import Icon from "./../../components/icon";
import Menu from "./../menu/index";
import "./index.scss";
import getNav from "../../data/nav";

export default function Nav() {
  const [isCollapsed, toggleCollapsed] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getNav().then(data => setData(data)).catch(e => console.error(e));
  }, []);

  return (<div className={cx("b-nav", {"b-nav--collapsed": isCollapsed})}>
    <div className="b-nav__menu">
      <div className="b-nav__toggle" onClick={() => toggleCollapsed(!isCollapsed)}><Icon type="hamburger" /></div>
      <Menu collapsed={isCollapsed} data={data}/>
    </div>
    <header className="b-nav__header">
      <img className="b-nav__logo" alt="Wayfair Logo" src="/img/logo.svg" />
    </header>
  </div>);
}