import './App.css';
import Header from './components/header';
import MainPage from './components/main-page';
import store from './redux/state'
function App(props) {

  return (
    <div>
      <body style={{backgroundColor:'#222226',minHeight:'100vh',maxHeight:'auto'}}>
        <Header />
        <MainPage state={store.getState()} dispatch={store.dispatch.bind(store)}/>
      </body>
    </div>
  );
}

export default App;
