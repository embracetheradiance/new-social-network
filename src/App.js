import './App.css';
import Header from './components/header';
import MainPage from './components/main-page';


function App(props) {

  return (
    <div>
      <body style={{backgroundColor:'#222226',height:'100vh'}}>
        <Header />
        <MainPage state={props.state}/>
      </body>

    </div>
  );
}

export default App;
