import axios from "axios";

function fetchVideos(id) {
  return axios(
    `https://api.rawg.io/api/games/${id}/movies?key=5733fc70eabf4d6c98937ac7d2520df0`
  )
}
export default fetchVideos
