import { NavLink } from 'react-router-dom'
import Logo from '../images/white-logo.jpg'
import '../styles/header.css'
const Header = () =>{
    return(
        <div className="header">
            <div className='main-header'>
                <div className="logo header-item">
                    <NavLink to='/news'>
                        <img className='header-item' src={Logo} alt="Logo" />
                    </NavLink>
                </div>
                <div className="search-input header-item">
                    <input id='search' placeholder='Search'></input>
                </div>
                <div className="player"></div>
                <div className="sing-up header-item">
                    <a>sign up</a>
                </div>
            </div>
        </div>
    );
}
export default Header 