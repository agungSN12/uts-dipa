"use client"

import { ComputerTower,Calendar,Timer} from "@phosphor-icons/react/dist/ssr";
import { motion } from "framer-motion"
import pictures from "@/app/img/WhatsApp Image 2024-03-16 at 00.20.26.jpeg"
import ImgComponent from "../img/ImgComponent";
import CommentBox from "@/components/comment/commentBox"
const About = ()=>{
    return (
        <div className="text-white  min-h-screen flex justify-center ">
            <motion.div className="h-full"  initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1,ease:"easeInOut"}}>
            <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 items-center z-30">
                <ImgComponent picture={pictures} />

            <div className=" flex flex-col mr-10">
                <div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center text-start">
                    <div className="bg-gray-700 w-full h-24 flex flex-col justify-center  z-50 rounded-xl shadow-2xl shadow-black">
                        <ComputerTower size={23} className="ml-4"/>
                        <h2 className="ml-5 font-bold">100+</h2>
                        <p className="ml-5">project selesai</p>
                    </div>
                    <div className="bg-gray-700 w-full h-24 z-50 flex flex-col justify-center  rounded-xl shadow-2xl shadow-black">
                        <Calendar size={23}  className="ml-4"/>
                        <h2 className="ml-5 font-bold">fress graduate+</h2>
                        <p className="ml-5">pengalaman</p>
                    </div>
                    <div className="bg-gray-700 w-full h-24 z-50 flex flex-col justify-center  rounded-xl shadow-2xl shadow-black">
                        <Timer size={23} className="ml-4" />
                        <h2 className="ml-5 font-bold">80+</h2>
                        <p className="ml-5">ketepatan waktu</p>
                    </div>
                </div>
                <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae beatae adipisci sunt. Nihil aliquid, facere voluptatem eveniet sunt quibusdam inventore alias optio reprehenderit unde, quia possimus natus debitis atque autem!</p>
                <p className="mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae beatae adipisci sunt. Nihil aliquid, facere voluptatem eveniet sunt quibusdam inventore alias optio reprehenderit unde, quia possimus natus debitis atque autem!</p>
            </div>
            </div>
            </motion.div>
           
        </div>
    )
}

export default About