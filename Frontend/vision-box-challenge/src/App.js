import './App.css';

import { Home, NewPerson } from "./Views";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<NewPerson/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
