import Messages from '../images/messages.svg'
import Friends from '../images/friends.svg'
import Settings from '../images/settings.svg'
import News from '../images/news.svg'
import Profile from '../images/profile.svg'
import '../styles/side.css'
import { NavLink } from 'react-router-dom'
const SideBar = () =>{
    return(
        <div className='sidebar'>
            <nav>
                <ol>
                    <li className='profile'>
                        <NavLink to='/me'>
                            <div className="side-icon">
                                <img src={Profile} alt="" />
                            </div>
                            <span>My Profile</span>
                        </NavLink>
                    </li>
                    <li className='news'>
                        <NavLink to='/news'>
                            <div className="side-icon">
                                <img src={News} alt="" />
                            </div>
                            <span>News</span>
                        </NavLink>
                    </li>
                    <li className='messages'>
                        <NavLink to='/messages'>
                            <div className="side-icon">
                                <img src={Messages} alt="" />
                            </div>
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li className='friends'>
                        <NavLink to='/friends'>
                            <div className="side-icon">
                                <img src={Friends} alt="" />
                            </div>
                            <span>Friends</span>
                        </NavLink>
                    </li>
                    <li className='settings'>
                        <NavLink to='/settings'>
                            <div className="side-icon">
                                <img src={Settings} alt="" />
                            </div>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ol>
            </nav>
            
        </div>
    );
}
export default SideBar