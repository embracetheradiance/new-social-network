import { NavLink } from 'react-router-dom'
const SideEl = (props) => {
    return (
        <li className={props.name}>
            <NavLink to={props.to}>
                <div className="side-icon">
                    <img src={props.src} alt="" />
                </div>
                <span>{props.sidename}</span>
            </NavLink>
        </li>
    );

}
export default SideEl
