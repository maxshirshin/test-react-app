import Icon from './../../components/icon';

import './index.scss';

export default function Nav() {
  return (<div className="b-nav">
    <div className="b-nav__menu">
      <Icon type="hamburger" />
    </div>
    <div className="b-nav__header">
      <Icon type="logo"/>
    </div>
  </div>);
}