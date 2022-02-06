
import axios from "axios";

function GetAllGame({
  page = 1,
  desde = "2020-01-01",
  hasta = "2021-08-27"
} = {}) {
    return axios(
      `https://api.rawg.io/api/games?key=5733fc70eabf4d6c98937ac7d2520df0&page=${page}&page_size=20&ordering=-rating&metacritic=80,100&dates=${desde},${hasta}`
    )
}
export default GetAllGame



