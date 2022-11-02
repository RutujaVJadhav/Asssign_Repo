//<a class="navbar-brand" href="#">Navbar</a>
//import './App.css';
import Hotels from './components/Hotel_Lists'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Admin from './components/Admin'
import Home from './components/Home'
import Book from './components/Book'
import Dashboard from'./components/Dashboard'
import Add from './components/Add'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    
      
       <Router>
           <div className="App">
          <Navbar/>
          
           <Routes>
                 <Route exact path='/hotel' element={< Hotels />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>
                 <Route exact path='/Register' element={< Register/>}></Route>
                 <Route exact path='/Admin' element={< Admin/>}></Route>
                 <Route exact path='/Home' element={< Home/>}></Route>
                 <Route exact path='/Book' element={< Book/>}></Route>
                 <Route exact path='/Dashboard' element={< Dashboard/>}></Route>
                 <Route exact path='/Add' element={< Add/>}></Route>                  
                 
          </Routes>
          </div>
       </Router>
    
  );
}

export default App;
