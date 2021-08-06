import { Route } from "react-router-dom"
import Chat from "./chat";
import Messages from "./messages";
import News from "./news"
import SideBar from "./sidebar"


const MainPage = (props) =>{
    return(
        <div className='main-page' style={{ width: '966px', margin: '0 auto', display: 'flex' }}>
           
                <SideBar state={props.state} />
                <div className="page-body" style={{ width: '795px' }}>

                    <Route path='/me' component=''></Route>
                    <Route path='/messages' render={ () => <Messages state={props.state}/>}></Route>
                    <Route path='/news' render={() => (<News state={props.state} posts={props.state.newsPage.posts} dispatch={props.dispatch}  />)}></Route>
                    <Route path='/chat/alex' render={() => (<Chat name={props.state.dialogPage.dialogData[0].name} state={props.state} dispatch={props.dispatch}/>)}></Route>
                    

                </div>
         

        </div>
    );
}
export default MainPage