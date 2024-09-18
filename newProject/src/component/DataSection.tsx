import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const DataSection = () => {
  return (
    <div className="flex flex-col mt-6 lg:mt-20 items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Feel the virtual world on 
            <span className="bg-gradient-to-r from-cyan-600 to-orange-400 text-transparent bg-clip-text">{" "}your  fingertips</span>

        </h1>
        <p className='mt-10 text-neutral-500 text-lg text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quisquam molestiae eveniet atque nam impedit modi ab ipsa blanditii
            s culpa ipsum facere quam perspiciatis officia saepe labore, ullam provident, aperiam quibusdam.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='py-2 px-3 bg-gradient-to-r from-orange-400 to-orange-800 rounded-tl-xl rounded-br-xl'>Let's Start</a>
            <a href="#" className='py-2 px-3 mx-3 rounded-tr-xl rounded-bl-xl border'>Docs</a>
        </div>
        <div className="flex justify-center mt-10">
            <video width={"50%"} height={300} autoPlay muted loop className='border border-orange-900 mx-4 my-4 rounded-lg'>

                <source src={video1} type='video/mp4' />
                

            </video>
            <video width={"50%"} height={300} autoPlay muted loop className='border border-orange-900 mx-4 my-4 rounded-lg'>

                <source src={video2} type='video/mp4' />
                

            </video>
        </div>

        </div>
  )
}

export default DataSection 