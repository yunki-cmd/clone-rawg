
import axios from "axios";

function GetAllGame() {
  return axios(
    "https://api.rawg.io/api/games?key=5733fc70eabf4d6c98937ac7d2520df0"
  )
}
export default GetAllGame



