import './App.css';
import Header from './components/header';
import MainPage from './components/main-page';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state'
function App(props) {

  return (
    <div>
      <body style={{backgroundColor:'#222226',minHeight:'100vh',maxHeight:'auto'}}>
        <Header />
        <MainPage state={props.state} addMessage={addMessage} addPost={addPost} updateNewPostText={updateNewPostText} updateNewMessageText = {updateNewMessageText}/>
      </body>

    </div>
  );
}

export default App;
