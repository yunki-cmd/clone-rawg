
import axios from "axios";

function GetAllGame() {
  return axios(
    "https://api.rawg.io/api/games?key=5733fc70eabf4d6c98937ac7d2520df0&dates=2021-06-01,2021-08-01&page=1&page_size=20"
  )
}
export default GetAllGame



