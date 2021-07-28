import { BrowserRouter, Route } from "react-router-dom"
import Chat from "./chat";
import Messages from "./messages";
import News from "./news"
import SideBar from "./sidebar"

const MainPage = () =>{
    return(
        <div className='main-page' style={{ width: '966px', margin: '0 auto', display: 'flex' }}>
            <BrowserRouter>
                <SideBar />
                <div className="page-body" style={{ width: '795px' }}>

                    <Route path='/me' component=''></Route>
                    <Route path='/messages' component={Messages}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/chat/alex' component={Chat} ></Route>
                    

                </div>
            </BrowserRouter>

        </div>
    );
}
export default MainPage