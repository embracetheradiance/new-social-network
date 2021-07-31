import './App.css';
import Header from './components/header';
import MainPage from './components/main-page';
import {addMessage} from './redux/state'
import {addPost} from './redux/state'
function App(props) {

  return (
    <div>
      <body style={{backgroundColor:'#222226',minHeight:'100vh',maxHeight:'auto'}}>
        <Header />
        <MainPage state={props.state} addMessage={addMessage} addPost={addPost}/>
      </body>

    </div>
  );
}

export default App;
