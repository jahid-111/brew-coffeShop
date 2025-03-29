import React, { useState } from "react";
import i from "../../../assets/images/hero/image.png";

export default function Card({ isDeliver }) {
  const [onOver, setOnOver] = useState(false);

  const eventHandlers = isDeliver
    ? {
        onMouseEnter: () => setOnOver(true),
        onMouseLeave: () => setOnOver(false),
      }
    : {};

  return (
    <div
      className="relative overflow-hidden"
      {...eventHandlers} // spread the event handlers
    >
      <img
        src={i}
        alt="Espresso"
        className="w-full h-full max-w-full object-cover aspect-square relative"
      />

      {!isDeliver && (
        <div className="text-start text-gray-800 flex gap-3 flex-col items-start">
          <h3 className="text-3xl py-2">Espresso</h3>
          <p>
            Describe your image here. Use catchy text to tell people the story
            behind the photo. Go to “Manage Media” to add your content.
          </p>
        </div>
      )}

      <button
        className={`absolute bottom-14 left-0 right-0 py-3 w-full text-gray-800 text-lg font-medium 
        backdrop-blur-md bg-white/60 transition-all duration-300 transform ${
          onOver ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Quick View
      </button>

      {isDeliver && (
        <div className="text-start text-gray-800 flex gap-3 flex-col items-start">
          <p>Blend</p>
          <p>10.99$</p>
        </div>
      )}
    </div>
  );
}
