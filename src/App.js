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
    
         <Route  path="/CreateProduct" element={<CreateProduct btn_txt="Create" method="POST" />}/>
        
        
         {/* Route component={Error}  */}
      </Routes>
    </Router>
    
    
    //<UpdateProduct product_name="Eggs"  category=""  price="123"   quantity="12"  expirydate="02/22/2023" supplier_email="maria@gmail.com"  btn_txt="Update"/>
    //<CreateProduct btn_txt="Create"/>
    
  );
}

export default App;
