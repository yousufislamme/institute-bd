// Hero.js
"use client";

import { Roboto, Salsa } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";
import Button from "../Button";
import { Context } from "../Context/Context";
import Search from "../Search";

const salsa = Salsa({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Hero = ({ item }) => {
  const { handleSearch, filteredStudents, searchQuery } = useContext(Context);

  return (
    <div className="flex flex-col items-center justify-center bg-purple-50 px-10 pb-10 pt-10">
      <div className="relative">
        <Search
          onChange={handleSearch}
          placeholder="Search by name or email"
          value={searchQuery}
          className="mb-5 mt-20 w-[400px] border-2 px-10 py-2"
        />
        <div className="top-22 absolute w-full bg-slate-300">
          {filteredStudents.map((item) =>
            searchQuery > item.studentName ? (
              <div className="flex rounded-b-lg px-3 py-2" key={item._id}>
                <Link href={`users/${item._id}`}>
                  Name: {item.studentName} | {item.email}
                </Link>
              </div>
            ) : null,
          )}
        </div>
      </div>
      <h1 className={`${salsa.className} sm:text-4xl lg:text-[50px]`}>
        Better Future For Your Kids <span className="text-purple-800">.</span>{" "}
      </h1>
      <p
        className={`${roboto.className} my-5 rounded-sm bg-white px-2 py-1 shadow-lg`}
      >
        Let the child be the director, and the actor in his own play
      </p>
      <Button
        className="my-10 mt-5 rounded-full bg-purple-800 px-10 py-3 font-semibold text-white shadow-xl hover:shadow-lg"
        BtnTitle="Get Start"
        href="/dashboard/addStudent"
      />
    </div>
  );
};

export default Hero;
