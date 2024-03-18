"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { List } from "@phosphor-icons/react/dist/ssr";

const Navbar = ()=>{
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-slate-900 relative flex w-full z-50">
            <div className="w-full flex items-center text-white">
                <a href="/"><h1 className="p-5 ">navbar</h1></a>
                <div className ="hidden md:block w-full ">
                    <ul className=" flex justify-end">
                        <li><a href="/about" className="hover:bg-blue-800 hover:py-3 px-4 rounded-full hover:transition ease-in-out duration-300">about</a></li>
                        <li><a href="/portofolio" className="hover:bg-blue-800 hover:py-3 px-4 rounded-full hover:transition ease-in-out  duration-300">portofolio</a></li>
                    </ul>
                </div>
            </div>
                <button className="mt-3 items-center md:hidden absolute right-0 z-50" onClick={()=>setOpen((open)=>!open)}>
                <List size={32} color="white" className="mr-3" />
                </button> 

         {open && (      
             <ul className=" gap-8  flex flex-col bg-black min-h-screen w-full  justify-center items-center text-white text-xl absolute  top-0 left-0 ">
                <li><a href="/" className="hover:bg-blue-800 hover:py-3 px-4 rounded-full hover:transition ease-in-out duration-300">home</a></li>
                <li><a href="/about" className="hover:bg-blue-800 hover:py-3 px-4 rounded-full hover:transition ease-in-out duration-300">about</a></li>
                <li><a href="/portofolio" className="hover:bg-blue-800 hover:py-3 px-4 rounded-full hover:transition ease-in-out  duration-300">portofolio</a></li>
            </ul>
         )}
    </nav>
    )
}

export default Navbar