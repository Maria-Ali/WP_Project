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

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   console.log(userToken);
//   return userToken?.token
// }

function App() {
  // let token = getToken();

  // if(!token) {
  //   console.log(token);
  //   return <Login setToken={setToken} />
  // } 
  const { token, setToken } = useToken();

  if(!token) {
    console.log(token)
    return <Login setToken={setToken} />
  }
  // else{
  //   return <HomePage/>
  // }
  return (
    <Router>
      <Routes>
        
        <Route  path="/" element={<HomePage/>} exact/>
         <Route  path="/CreateProduct" element={<CreateProduct btn_txt="Create" method="post" url="/Create" />}/>
         <Route  path="/HomePage" element={<HomePage/>}/>
         <Route  path="/Login" element={<Login/>}/>

      </Routes>
     </Router>
  );
}

export default App;
