import fetchVideos from "../../services/fetchVideos/fetchVideos";
import fetchImages from "../../services/fetchImages/fetchImages";
import Loading from "../loading/loading"
import Carrousel from "../carrousel/carrousel";
import {
  useEffect,
  useState
} from "react";


const Trailer = ({id}) => {
  
  const [url,seturl] = useState("")
  const [imgs, setImgs] = useState({})
  
  useEffect(() => {
    if (id !== undefined) {
        fetchVideos(id)
          .then(dat => {
            const datos = dat?.data?.results[0]?.data["480"]
            if (datos !== undefined) {
              seturl(datos)
            } else {
              fetchImages(id)
                .then(resp => {
                  const datyosimgs = resp?.data?.results
                  setImgs(datyosimgs)
                })
            }
          })
    }
    return () => {
      setImgs({})
    }
  }, [id])

  if (url !== "") {
    return (
      <video className="h-72 rounded-t-lg" src={url} autoPlay muted loop></video>
    )
  }

  if (Object.keys(imgs).length > 0) {
    return (
      <Carrousel imgs={imgs} ></Carrousel>
    )
  }
  return (
    <Loading />
  )
    
}

export default Trailer
