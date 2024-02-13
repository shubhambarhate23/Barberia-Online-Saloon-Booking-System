import axios from "axios";

const BASE_API_URL = 'http://localhost:8080';
class AdminService{

    getAllRegisterShop(){
        return axios.get(BASE_API_URL+'/api/v5/allRegisterShop')
    }

    getAllUserRegister(){
        return axios.get(BASE_API_URL+'/api/v5/allRegisterUser')
    }

    deleteUser(userid){
        return axios.get(BASE_API_URL+'/deleteuser/'+userid);
    }

   
}


    
export default new AdminService();