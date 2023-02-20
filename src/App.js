import logo from './logo.svg';
import './App.css';
import "./index.css"
import{BrowserRouter} from 'react-router-dom'
import Main from './components/Main';

function App() {
  return (
    <div className='bg-slate-200'>
      
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
   
  </div>
  );
}

export default App;
