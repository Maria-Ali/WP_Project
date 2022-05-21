import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import MyNavbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import Login from './pages/Login';

function App() {
  const egg="Eggs";
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage/>} exact/>
         <Route  path="/CreateProduct" element={<CreateProduct btn_txt="Create" method="post" url="/Create" />}/>
         <Route  path="/Login" element={<Login/>}/>
        <Route  path="/UpdateProduct" element={<UpdateProduct btn_txt = "Update"/>}/>
         {/* Route component={Error}  */}
      </Routes>
    </Router>
    //<CreateProduct btn_txt="Create"/>
    
  );
}

export default App;
