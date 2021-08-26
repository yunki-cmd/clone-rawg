import { useRef, useState } from "react"

function Carrousel  ({ imgs }) {
  
  const [img,] = useState(imgs)
  const [longitud,] = useState(Object.keys(img).length)
  const refImg = useRef()

  const forloop = () => {
    const spans = []
    for (let index = 0; index < longitud; index++) {
      spans.push(<div key={index} onMouseEnter={handlrHoverImgs} value={index} className=" h-72 w-1/5 opacity-50  border-b-4 border-gray-200 "></div>)
    }
    return spans
  }

  const handlrHoverImgs = (e) => {
    const changeImg = refImg.current
    const currentDiv = e.target.getAttribute('value')
    changeImg.src= img[currentDiv].image
  }

  return (
    <div className="relative">
      <img ref={refImg} className="h-72 rounded-t-lg" src={img[0].image} alt={img[0].id} />
      <div className="flex absolute justify-evenly w-full gap-2 bottom-5">
      {forloop().map(elem => {
        return elem
      })}
      </div>
    </div>
  )
}

export default Carrousel
