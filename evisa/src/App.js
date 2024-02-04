import './App.css';
import Applied_users from './components/Applied_users';
import Apply from './components/Apply';
import Register from './components/Register';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import CheckStatus from './components/CheckStatus';


function App() {
  return (
    < div className='App'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/check' element={<CheckStatus/>}/>
        <Route path='/show' element={<Applied_users/>}/>
      </Routes>
  </div>
  );
}

export default App;
