"use client"

import { Roboto, Salsa } from "next/font/google"
import Image from "next/image"
import Button from "./Button"
import Boy from "./img/boy.png"
import Girl from "./img/girl.png"
const salsa = Salsa({ weight: '400', subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })




const Hero = () => {
  return (
    <div className="px-10 flex flex-col bg-purple-50 justify-center items-center pt-20 pb-10">
      <h1 className={`${salsa.className} sm:text-4xl lg:text-[50px]`}>Better Future For Your Kinds</h1>
      <p className={`${roboto.className}bg-white shadow-lg px-2 py-1 rounded-sm`}>Let the child be the director, and the actor in his won play</p>
      <Button className="bg-purple-800 font-semibold text-white px-10 py-3 my-10 rounded-full shadow-xl mt-5" BtnTitle="Get Start" />
      {/* Grid */}
      <div className="grid w-full grid-cols-10 mt-5 gap-5 ">
        {/* col 1 */}
        <div className="col-span-3">
          <Image className="w-full h-[300px] object-cover" src={Girl} width={800} height={800} />
</div>
{/* col 2 */}
        <div className=" col-span-4">
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam beatae repellat dolores, ratione quidem. Lorem ipsum dolor sit.</p>
          <div className="grid grid-cols-2  grid-rows-2">
           
            <div className="w-56 mt-10 col-start-1">
             <h3 className={`${salsa.className} text-3xl`}>7.5K+</h3>
          <p>Total active students taking gifted courses.</p>
            </div>
            <div className="col-start-1"></div>
            <div className="w-56 mt-10 col-start-2">
             <h3 className={`${salsa.className} text-3xl`}>50+</h3>
          <p>Available field programs and increasing.</p>
            </div>
            
         </div>
</div>
{/* col 3 */}
        <div className=" col-span-3">
          <Image className="w-full h-[300px] object-top" src={Boy} width={800} height={800} />
          
</div>
      </div>
    </div>
  )
}

export default Hero