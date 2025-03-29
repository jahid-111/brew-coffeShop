import React from "react";
import i from "../../assets/images/hero/image.png";
export default function HeroSection() {
  return (
    <section
      className="w-full aspect-16/9 sm:aspect-16/7 object-cover bg-cover bg-center bg-no-repeat relative "
      style={{
        backgroundImage: `url(${i})`,
      }}
    >
      <div className=" md:flex justify-around gap-5">
        <div className="md:w-6/12 border p-4">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            FOR THE LOVE <br /> OF COFFEE
          </h1>
        </div>

        <div className=" md:w-6/12 border p-4">
          <button className=" absolute bottom-[3vh] right-[5vh] border px-10 py-3 md:px-10 md:py-5 text-xl md:text-3xl border-gray-800 hover:bg-green-600 bg-amber-100 cursor-pointer text-gray-800">
            <span className=" font-medium">Shop Blends</span>
          </button>
        </div>
      </div>
    </section>
  );
}
