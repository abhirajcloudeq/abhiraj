// import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <img src={require('./images/atlassian.jpg')} alt="logo" width='100%'></img>
    </div>
    
  );
}

export default App;
