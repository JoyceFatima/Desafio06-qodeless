import axios from "axios";

const baseURL = 'https://aps-weather-app.herokuapp.com/weather?cityName=Petrolina'; 

class Api {
  async getApi(){
    return axios.get(baseURL).then((response) => (response.data))
    .catch((err) => err);
  }
}

export const api = new Api();