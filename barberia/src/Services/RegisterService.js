import axios from "axios";

const BASE_API_URL = 'http://localhost:8080';
localStorage.getItem("id");
class RegisterService{
    addShop(register){
        return axios.post(BASE_API_URL+'/api/v1/addShop',register);
    }

    viewProfile(){
        return axios.get(BASE_API_URL,'/viewProfile');
    }

    shopLogin(data){
        return axios.post(BASE_API_URL+'/api/v1/shoplogin',data)
    }


    getRegisterShopById(shopno){
        return axios.get(BASE_API_URL+'/api/v1/getShopById/'+shopno)
    }

    getAllRegisterShop(){
        return axios.get(BASE_API_URL+'/api/v1/allShop')
    }

    getShopByEmail(email){
        return axios.get(BASE_API_URL+'/api/v1/findShopByEmail/'+email)
    }

    updateShopProfile(profile){
        return axios.put(BASE_API_URL+'/api/v1/updateShopProfile/{shopno}',profile)
    }

    placeOrder(order){
        return axios.post(BASE_API_URL+'/api/v4/addOrder',order)
    }

    getAllOrderBySr(shopno){
        return axios.get(BASE_API_URL+'/api/v4/ordersr/'+shopno)
    }
    getAllOrderByUr(userid){
        return axios.get(BASE_API_URL+'/api/v4/orderur/'+userid)
    }
}

    
export default new RegisterService();