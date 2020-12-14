import axios from 'axios';
const apiURL = 'https://api.jikan.moe/v3/search/anime'

export default class ApiController {   

 static onSearch(searchTerm, limit, resolve, reject){

    let URL = apiURL + '?q=' + searchTerm + "&amp;limit="+limit;
    axios.get(URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    });
  }
}