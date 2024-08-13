"use client";

import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [roomCode, setRoomCode] = useState("");
  const [naam, setNaam] = useState("");
  const handleFormSubmit = (ev: any) => {
    ev.preventDefault();
  };

  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center text-center">
      <div className="px-4 md:px-6 max-w-[1500px] mx-auto w-[90%]">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-dark">
            Ready to take this week's quiz?
          </h1>
          <p className="text-gray-600">Get ready to ace it.</p>
        </div>
        <div className="mt-6">
          <Link
            href={"/quiz"}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-2xl font-medium text-gray-50 shadow transition-colors duration-500 hover:bg-primary/80"
          >
            Start Quiz
          </Link>
        </div>

        <form onSubmit={handleFormSubmit} className="mt-32 space-x-5">
          <div className="inline-flex items-center text-black justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium  shadow transition-colors duration-500 hover:bg-primary/80">
            <input
              className="p-1 text-xl font-semibold"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              type="text"
              required
              placeholder="Enter Room Code"
            />
          </div>
          <div className="inline-flex items-center text-black justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium  shadow transition-colors duration-500 hover:bg-primary/80">
            <input
              className="p-1 text-xl font-semibold"
              value={naam}
              onChange={(e) => setNaam(e.target.value)}
              type="text"
              required
              placeholder="Enter Your Name"
            />
          </div>
        </form>
        <div className="mt-6">
          <Link
            href={`/room/${naam}/${roomCode}`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3  font-medium text-gray-50 text-2xl shadow transition-colors duration-500 hover:bg-primary/80"
          >
            Start Video Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
