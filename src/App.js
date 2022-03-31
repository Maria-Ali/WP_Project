import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import MyNavbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';


function App() {
  const egg="Eggs";
  return (
    //<div className='App'>
     //<CreateProduct/>
      //<HomePage/>
    //</div>
    
    <UpdateProduct product_name="Eggs"  category=""  price="123"   quantity="12"  expirydate="02/22/2023" supplier_email="maria@gmail.com"  btn_txt="Update"/>
    //<CreateProduct btn_txt="Create"/>
    
  );
}

export default App;
