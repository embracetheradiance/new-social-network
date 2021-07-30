import { BrowserRouter, Route } from "react-router-dom"
import Chat from "./chat";

import Messages from "./messages";
import News from "./news"
import SideBar from "./sidebar"


const MainPage = (props) =>{
    return(
        <div className='main-page' style={{ width: '966px', margin: '0 auto', display: 'flex' }}>
            <BrowserRouter>
                <SideBar />
                <div className="page-body" style={{ width: '795px' }}>

                    <Route path='/me' component=''></Route>
                    <Route path='/messages' render={ () => <Messages dialogData={props.state.dialogData}/>}></Route>
                    <Route path='/news' render={() => (<News state={props.state} />)}></Route>
                    <Route path='/chat/alex' component={Chat} ></Route>
                    

                </div>
            </BrowserRouter>

        </div>
    );
}
export default MainPage