import { NavLink } from 'react-router-dom';
import '../styles/dialog.css'
const Dialog = (props) =>{
    return(
        <NavLink to={'chat/' + props.name}>
            <li>
                <div className="dialog-avatar">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png' />
                </div>
                <div className="dialog-content">
                    <div className="dg-content">
                        <span>{props.name}</span>
                    </div>
                </div>
            </li>
        </NavLink>
        
    );
}
export default Dialog