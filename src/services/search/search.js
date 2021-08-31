import axios from "axios"
const search = (query) => {
  return axios(`https://api.rawg.io/api/games?key=5733fc70eabf4d6c98937ac7d2520df0&search=${query}`)
}
export default search
