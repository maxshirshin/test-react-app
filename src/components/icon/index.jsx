import './index.scss';

export default function Icon(props) {
    const { type = '' } = props;
    return <div className={`b-icon b-icon_type_${type}`}>{type}</div>;
}
