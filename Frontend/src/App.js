import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Customer from './page/Customer';
import Admin from './page/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='*' element={<h2>Page not Found</h2>}/>
      </Routes>
      
    </div>
  );
}

export default App;
