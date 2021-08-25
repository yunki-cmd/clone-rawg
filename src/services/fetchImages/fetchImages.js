import axios from "axios";


function fetchImages (id) {
  return axios(`https://api.rawg.io/api/games/${id}/screenshots?key=5733fc70eabf4d6c98937ac7d2520df0`)
  
}

export default fetchImages
