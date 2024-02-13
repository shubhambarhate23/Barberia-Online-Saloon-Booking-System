import axios from 'axios';
const BASE_API_URL="http://localhost:8080";

class AddService{
    addService(service){
        return axios.post(BASE_API_URL+'/api/v3/addService',service)
    }

    getShopById(shopno){
        return axios.get(BASE_API_URL+'/api/v3/findByShopno/'+shopno)
    }

    getServiceById(asid){
        return axios.get(BASE_API_URL+'/api/v3/findByAsid/'+asid)
    }

    updateService(d){
        return axios.put(BASE_API_URL+'/api/v3/updateDetails/{asid}',d)
    }


}
export default new AddService();