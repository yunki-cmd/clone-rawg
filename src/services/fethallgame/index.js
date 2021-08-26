
import axios from "axios";

function GetAllGame() {
  return axios(
    "https://api.rawg.io/api/games?key=5733fc70eabf4d6c98937ac7d2520df0&page=1&page_size=20&ordering=-rating&metacritic=80,100&dates=2020-01-01,2021-08-25"
  )
}
export default GetAllGame



