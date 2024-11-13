import React from "react"
import { Fugaz_One } from "next/font/google"
import Calendar from "./Calendar"
import { CallToAction } from "./CallToAction"

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] })

export default function Hero() {
  return (
    <div className="py-4 sm:py-10 flex flex-col gap-4 sm:gap-8">
      <h1 className={"text-5xl sm:text-6xl md:text-7xl text-center " + fugazOne.className}>
        <span>
          Capture Your Emotions and Discover Your<span className="textGradient"> Daily Mood</span> Journey!
        </span>
        {/* <span className="textGradient">MOOD</span> helps you track your <span className="textGradient">daily</span>{" "}
        mood! */}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Use MOOD to track your feelings each day and{" "}
        <span className="font-semibold">look back at your mood over time.</span>
      </p>

      <CallToAction />
      <Calendar demo />
    </div>
  )
}
