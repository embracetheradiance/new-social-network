import { Route } from "react-router-dom"
import ChatContainer from "./chatContainer";
import Messages from "./messages";
import NewsContainer from "./newsContainer";
import SideBar from "./sidebar"


const MainPage = (props) =>{
    return(
        <div className='main-page' style={{ width: '966px', margin: '0 auto', display: 'flex' }}>
           
                <SideBar state={props.state} />
                <div className="page-body" style={{ width: '795px' }}>

                    <Route path='/me' component=''></Route>
                    <Route path='/messages' render={ () => <Messages state={props.state}/>}></Route>
                    <Route path='/news' render={() => (<NewsContainer/>)}></Route>
                    <Route path='/chat/alex' render={() => (<ChatContainer/>)}></Route>

                </div>
         

        </div>
    );
}
export default MainPage