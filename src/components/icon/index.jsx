import "./index.scss";
import cx from "classnames";

export default function Icon(props) {
    const { type = "", className = "" } = props;
    return (<div
        title={type}
        className={cx("b-icon", className, {[`b-icon--${type}`]: !!type})}
    />);
}
