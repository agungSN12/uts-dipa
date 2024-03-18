import { useState } from "react"


const InputComment =() =>{
    const [comment,setcomment]= useState("")
    const [isCreated, setisCreated]= useState(false)

    const handleinput = (event)=>{
        setcomment(event.target.value)
    }

    const handleButton = async(event)=>{
        event.preventDefault()
        const data = { comment } 
        const res = await fetch("api/v1/comment",{
            method: "POST",
            body:JSON.stringify(data)
        })
        const response = await res.json();
        if (response.isCreated) {
            setisCreated(true)
            setcomment("");
        }
    }
    return(
        
        <>
        <div className="text-white flex flex-col">
            <textarea 
            className="text-black" 
            cols="100" 
            rows="5" 
            onChange={handleinput}
            value={comment}
            >
                
            </textarea>
            <button onClick={handleButton} className="bg-fuchsia-700 w-10  rounded-xl">kirim</button>
        </div>
        </>
    )
}

export default InputComment