"use client"
import { AnimatePresence, animate, delay, motion } from "framer-motion"
import Image from "next/image"
import profilepic from "@/app/img/footeg2-removebg-preview (2).png"
import { ReadCvLogo, EnvelopeSimple,GithubLogo,Code,FilmSlate,Robot} from "@phosphor-icons/react/dist/ssr";
const Hero =()=>{
    return(
        <div className="">
            <section data-aos="fade-up" className="min-h-screen w-full flex flex-col xl:flex-row xl:text-start  text-center  shadow-2xl justify-center items-center mx-auto text-white ">
                <div className=" mr-54 bg-white mb-5 rounded-full shadow-xl ring-blue-700 ring-8"> 
                   <Image  src={profilepic} className="xl:h-48 h-32 w-32 object-cover xl:w-48 rounded-full" />
                </div>
                <div className="relative  content-center mx-20">
                    <div className=" flex gap-2 flex-col">
                        <h1 className="text-4xl font-bold">Hi I'm Agung Setiawan</h1>
                        <h2 className="text-2xl font-bold text-blue-700">Fullstack Devolopment</h2>
                        <p className=" mt-5 text-sm">saya adalah fullstack devolopment saya ingin mahir <br/> di bidang tersebut saya akan terus belajar  <br/> 
                        untuk mencapainya </p>
                    </div>
                    
                <div className="flex flex-1 it gap-6 mt-4 justify-center xl:justify-start ">
                    <div className="bg-blue-700 h-10 w-10  flex items-center content-center rounded-full  justify-center ">
                        <ReadCvLogo size={28}  />
                    </div>

                    <div className="bg-blue-700 h-10 w-10  flex items-center content-center rounded-full  justify-center">
                    <EnvelopeSimple size={32} />
                    </div>

                    <div className="bg-blue-700 h-10 w-10  flex items-center content-center rounded-full  justify-center">
                    <GithubLogo size={32} color="black"/>
                    </div>
                </div>

                    <div className="flex gap-8 mt-7 justify-center xl:justify-start">
                        <button className="bg-blue-700 px-7 py-2 rounded-lg shadow-xl ring-1 ring-blue-700 text-white ">Hire me</button>
                        <button className="bg-white px-7 py-2 rounded-lg shadow-xl ring-1 ring-white  text-blue-700">Lets talk</button>
                    </div>
                </div>
            </section>

            <div className="w-full min-h-screen  flex flex-col justify-center items-center ">
                <h1 className="text-white text-3xl font-extrabold">My <span className="text-fuchsia-900">Skill</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-3  gap-20 p-11">
                    <div className="bg-slate-700 h-60 w-60 rounded-xl flex ring-1 ring-blue-700 text-white items-center text-lg  flex-col justify-center">
                        <di className="p-7">
                            <Code size={23} />
                            <h1 className="mb-4 text-xl font-bold">web devolopment</h1>
                            <p className="text-sm mb-4">dalam membuat web biasanya saya menggunakan teknlogi next js</p>
                            <button className="bg-blue-700 p-3 rounded-xl ring-1 ring-black shadow-md shadow-black">detail</button>
                        </di>
                    </div>
                    <div className="bg-slate-700 h-60 w-60 rounded-xl flex ring-1 ring-blue-700 text-white items-center text-lg  flex-col justify-center">
                        <div className="p-7">
                            <FilmSlate size={23} />
                            <h1 className="mb-4 text-xl font-bold">Editing video</h1>
                            <p className="text-sm mb-4">biasanya saya menggunakan premier pro untuk mengedit video</p>
                            <button className="bg-blue-700 p-3 rounded-xl ring-1 ring-black shadow-md shadow-black">detail</button>
                        </div>
                    </div>
                    <div className="bg-slate-700 h-60 w-60 rounded-xl flex ring-1 ring-blue-700 text-white items-center text-lg  flex-col justify-center">
                        <div className="p-7">
                            <Robot size={23} />
                            <h1 className="mb-4 text-xl font-bold">IoT</h1>
                            <p className="text-sm mb-4">saya belajar juga tentang iot sebagai dasar saya belajar arduino</p>
                            <button className="bg-blue-700 p-3 rounded-xl ring-1 ring-black shadow-md shadow-black">detail</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero