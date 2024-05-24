"use client";

import { Roboto, Salsa } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Girl from "./img/girl.png";
import RightGirl from "./img/rightGirl.png";
const salsa = Salsa({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-50 px-10 pb-10 pt-20">
      <h1 className={`${salsa.className} sm:text-4xl lg:text-[50px]`}>
        Better Future For Your Kinds <span className="text-purple-800">.</span>{" "}
      </h1>
      <p
        className={`${roboto.className}bg-white my-5 rounded-sm px-2 py-1 shadow-lg`}
      >
        Let the child be the director, and the actor in his won play
      </p>
      <Link href="/students">
        <Button
          className="my-10 mt-5 rounded-full bg-purple-800 px-10 py-3 font-semibold text-white shadow-xl"
          BtnTitle="Get Start"
        ></Button>
      </Link>

      <div className="mt-5 grid w-full grid-cols-10 gap-5 ">
        {/* col 1 */}
        <div className="col-span-3">
          <Image
            className="h-[300px] w-full object-cover"
            src={Girl}
            width={800}
            height={800}
          />
        </div>
        {/* col 2 */}
        <div className=" col-span-4">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam
            beatae repellat dolores, ratione quidem. Lorem ipsum dolor sit.
          </p>
          <div className="grid grid-cols-2  grid-rows-2">
            <div className="col-start-1 mt-10 w-56">
              <h3 className={`${salsa.className} text-3xl`}>
                7.5K <span className="text-purple-800">+</span>
              </h3>
              <p>Total active students taking gifted courses.</p>
            </div>
            <div className="col-start-1"></div>
            <div className="col-start-2 mt-10 w-56">
              <h3 className={`${salsa.className} text-3xl`}>
                50 <span className="text-purple-800">+</span>
              </h3>
              <p>Available field programs and increasing.</p>
            </div>
          </div>
        </div>
        {/* col 3 */}
        <div className=" col-span-3">
          <Image
            className="w-full object-cover object-top"
            src={RightGirl}
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
