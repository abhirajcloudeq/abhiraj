// import logo from './logo.svg';
import './App.css';
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <div>

         <img src={require('./images/atlassian.jpg')} alt="logo" width='100%'></img>
         <h1 className='text'>Move work Forward </h1><br></br>
         <h2 className='text2'>atlassian helps team work smarter and faster,together.</h2><br></br>
         <button className='button2'>more details </button>
      </div>
   </div>
    
  );
}

export default App;
