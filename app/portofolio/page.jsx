"use client"
import CommentBox from "@/components/comment/commentBox";
import InputComment from "@/components/comment/inputComment";
import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion"
import { useState } from "react";

const Portofolio =()=>{
    const [detail,setdetail] = useState(false)

    return(
        <motion.div className="h-full"  initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1,ease:"easeInOut"}}>
        <div className="w-full min-h-screen  flex justify-center text-white">
            <div className="grid grid-cols-1 mt-5 xl:grid-cols-5 gap-5  md:grid-cols-3">
                <div className="bg-slate-600 rounded-xl w-60 h-60 p-5 flex flex-col justify-center shadow-xl shadow-black ring-blue-700 ring-1">
                    <h1>web devolopment</h1>
                    <p className="mb-6">portofolio tentang web</p>
                 <button onClick={()=>setdetail((detail)=>!detail)}><CaretDoubleRight size={32} color="blue" id="icon" /></button>

                {detail &&(
                    <div>
                        <h1>detail portofolio</h1>
                    </div>
                  )}
                </div>
                <div className="bg-slate-600 w-60 h-60 p-5 rounded-xl flex flex-col justify-center shadow-xl shadow-black ring-blue-700 ring-1">
                    <h1>editing</h1>
                    <p className="mb-6">portofoilo tentang editing</p>
                 <CaretDoubleRight size={32} color="blue" />

                </div>
                <div className="bg-slate-600 rounded-xl shadow-xl shadow-black ring-blue-700 ring-1 w-60 h-60 p-5 flex flex-col justify-center">
                    <h1>IoT</h1>
                    <p className="mb-6">portofolio tentang IoT</p>
                    <CaretDoubleRight size={32} color="blue" />
                </div>

            </div>   
        </div>
        
        <InputComment/>

        </motion.div>
    )
}

export default Portofolio