import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import MyNavbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import Login from './pages/Login';
import useToken from './useToken';
import Logout from './pages/Logout';

function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    console.log(token);
    return <Login setToken={setToken} />
  }
  
  return (
    // <Router>
      <Routes>
        
         <Route  path="/" element={<HomePage />} exact/>
         <Route  path="/CreateProduct" element={<CreateProduct btn_txt="Create" method="post" url="/Create" />}/>
         <Route  path="/HomePage" element={<HomePage />}/>
         <Route  path="/Login" element={<Login/>}/>
         <Route  path="/Logout" element={<Logout />}/>

      </Routes>
      // </Router>
  );
}

export default App;
