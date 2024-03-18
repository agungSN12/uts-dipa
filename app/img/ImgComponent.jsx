import Image from "next/image"
const ImgComponent = ({ picture })=>{
    return(
        <div className="flex justify-center items-center ">
        <Image src={picture} className="h-96 w-72 object-cover ring-4 ring-slate-900 rounded-xl shadow-lg shadow-slate-800"></Image>
        </div>
    )
}
export default ImgComponent