"use client"
import { AnimatePresence, animate, delay, motion } from "framer-motion"
import Navbar from "../navbar"
import { usePathname } from "next/navigation"


const ComponentLayout =({ children })=>{
    
    const pathname = usePathname()
    return(
        <AnimatePresence mode="wait">
        <div key={pathname} className="bg-gradient-to-r from-black via-black to-blue-950 min-h-screen w-full">
            <motion.div className="bg-black h-screen rounded-t-xl w-screen z-40 fixed text-white" 
            animate={{height:"0vh"}}
            exit={{height:"100vh"}}
            transition={{duration: "0.8", ease:"easeInOut"}}></motion.div>

            <motion.div className=" h-fit w-fit s z-50 m-auto top-0 bottom-0 left-0 right-0 fixed text-8xl text-white" 
            initial={{opacity:1}}
            animate={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration: "0.8", ease:"easeInOut"}}>{pathname.substring(1)}</motion.div>

            <motion.div className="bg-blue-500 rounded-t-full  w-screen z-30 bottom-0 fixed" 
            initial={{height:"100vh"}}
            animate={{height:"0vh",transition: {delay:0.5}}}
            />
            
            
            

           
            
            <Navbar/>
            
            {children}
        </div>

        </AnimatePresence>
    )
}

export default ComponentLayout
