import '../src/app.css';
import Home from './components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp'
import Login from './components/Login';
import RegisterShop from './components/RegisterShop';
import ShopService from './components/Shop/ShopService';
import ShopProfile from './components/Shop/ShopProfile';
import ApprovalService from './components/Shop/ApprovalService'
import AboutUs from './components/AboutUs'
import Slogin from './components/Slogin';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FrontPage from './components/CustomerLogin/FrontPage';
import SelectService from './components/CustomerLogin/SelectService';
import Payment from './components/CustomerLogin/Payment';
import UserProfile from './components/CustomerLogin/UserProfile';
import ViewService from './components/Shop/ViewService';
import UpdateService from './components/Shop/UpdateService';
import UpdateProfile from './components/CustomerLogin/UpdateProfile';
import UpdateShop from './components/Shop/UpdateShop';
import AdminLogin from './Admin/AdminLogin';
import GetAll from './Admin/GetAll';
import GetAllUser from './Admin/getAllUser';
import Order from './components/CustomerLogin/Order';
import ViewOrder from './components/Shop/ViewOrder';
import ViewUserOrder from './components/CustomerLogin/ViewUserOrder';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
  
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/AdminLogin" element={<AdminLogin/>}></Route>
          <Route exact path="/GetAll" element={<GetAll/>}></Route>
          <Route exact path="/GetAllUser" element={<GetAllUser/>}></Route>
          <Route exact path="/Slogin" element={<Slogin/>}></Route>
          <Route exact path="/SignUp" element={<SignUp/>}></Route>
          <Route exact path="/AboutUs" element={<AboutUs/>}></Route>
          <Route exact path="/FrontPage" element={<FrontPage/>}></Route>
          <Route exact path="/RegisterShop" element={<RegisterShop/>}></Route>
          <Route exact path="/ShopService" element={<ShopService/>}></Route>
          <Route exact path="/SelectService/:shopno" element={<SelectService/>}></Route>
          <Route exact path="/ShopProfile/:email"element={<ShopProfile/>}></Route>
          <Route exact path="/ShopProfile"element={<ShopProfile/>}></Route>
          <Route exact path="/Payment"element={<Payment/>}></Route>
          <Route exact path='/ApprovalService' element={<ApprovalService/>}></Route>
          <Route exact path='/UserProfile' element={<UserProfile/>}></Route>
          <Route exact path='/ViewService/:shopno' element={<ViewService/>}></Route>
          <Route exact path='/UpdateService/:asid' element={<UpdateService/>}></Route>
          <Route exact path='/UpdateProfile' element={<UpdateProfile/>}></Route>
          <Route exact path='/UpdateShop' element={<UpdateShop/>}></Route>
          <Route exact path='/Order' element={<Order/>}></Route>
          <Route exact path='/ViewOrder' element={<ViewOrder/>}></Route>
          <Route exact path='/ViewUserOrder' element={<ViewUserOrder/>}></Route>
          <Route exact path='/Footer' element={<Footer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
