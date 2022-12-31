import './App.css';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <Router>   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Checkout/>} />   
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
