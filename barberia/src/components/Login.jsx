import React,{ useState, useEffect }  from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom';
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './About.css'
import '../components/Footer';
const Login = () => {

    const { userid } = useParams();

    console.log(userid);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        


   
    
    
    
    
    
    const [user, setUser] = useState([]);
    const [userenter, setUserenter] = useState({});

    let navigate = useNavigate();

    function preventbcak(){
        window.history.forward();
      }
      setTimeout(preventbcak(),0);
      window.onunload = function (){"null"}
      window.onload=function (){"null"}
    
    useEffect(() => {
        fetch("http://localhost:8080/api/v2/allUser")
            .then(res => res.json())
            .then((result) => {setUser(result);}
            );
    }, []);

    console.log(user)








        
   const onLogin=()=>{
    let id = document.getElementById("email")
    let pass = document.getElementById("password")

    //console.log(id.value);
    //console.log(pass.value);



    var verify;
    user.map(val => {
        if (val.email === id.value && val.password === pass.value) {
            let obj = { email: val.email, pwd: val.password, rname: val.rname, shopname:val.shopname, shopno:val.shopno ,address:val.address , city:val.city}
            verify = obj;
            localStorage.setItem("email",id.value)
            localStorage.setItem("pass",pass.value)

            fetch("http://localhost:8080/api/v2/userlogin/" + obj.password)
                .then(res =>res.json())
                .then((result) => {
                    setUserenter(result);
                });
        
            toast.success("Login Successfull");
            navigate('/UserProfile');
            toast.success("Login Successfull");
        }
        //console.log(verify);
    }
    )
    if (verify == null) {
        toast.error("Incorrect User Id or Password");
    } 
}


    return (
        <div className='ul'>
            <Navbar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 offset-md-10 mt-5">
                        <div className="card mt-5">
                            <div className="card-header text-center fs-3 text-success">Login</div>
                                <div className="card-body">
                                <div className="mb-3">
                                    <label>Email </label>
                                    <input type="email" id="email" className='form-control' name='email' 
                                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/>
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="password"  id="password" className='form-control' name='password'
                                     value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password"/>
                                </div>
                                <div className="text-center">
                                    <button className='btn btn-success me-2' id="signin" onClick={onLogin}>Login</button><br></br>
                                    <hr></hr>
                                    <Link className='btn btn-warning me-2' to={'/SignUp'} >Create New Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center"/>
        </div>
    )
}

export default Login