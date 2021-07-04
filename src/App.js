import logo from './logo.svg';
import './App.css';
import withStorage from './components/WithLocalStorge/WithLocalStorge';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App" style={{margin:"150px",width:"1000px" ,background:"blue",height:"150px"}}>
      <Login />
    </div>
  );
}

export default App;
