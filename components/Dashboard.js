import React from "react"
import { Fugaz_One } from "next/font/google"
import Calendar from "./Calendar"

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] })

export default function Dashboard() {
  const status = {
    num_days: 14,
    remaining_days: "13:14:26",
    date: new Date().toDateString(),
  }

  const moods = {
    happy: "😊",
    sad: "😭",
    angry: "😡",
    excited: "🤩",
    anxious: "🥶",
  }

  return (
    <div className="flex flex-1 flex-col gap-8 sm:gap-10 md:gap-16">
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-600 rounded-lg gap-4">
        {Object.keys(status).map((state, index) => {
          return (
            <div key={index} className="p-4 flex flex-col gap-1 sm:gap-2">
              <p className="text-xs sm:text-sm uppercase font-medium truncate ">{state.replaceAll("_", " ")}</p>
              <p className={"font-base sm:text-lg truncate " + fugazOne.className}>{status[state]}</p>
            </div>
          )
        })}
      </div>
      <h4 className={"text-5xl sm:text-6xl md:text-7xl text-center " + fugazOne.className}>
        How do you <span className="textGradient">feel</span> today ?
      </h4>

      <div className="flex items-stretch flex-wrap gap-4">
        {Object.keys(moods).map((mood, index) => {
          return (
            <button
              key={index}
              className={
                "purpleShadow p-4 px-5 rounded-xl duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col items-center gap-2 flex-1 "
              }
            >
              <p className="text-3xl sm:text-4xl md:text-5xl">{moods[mood]}</p>
              <p className={"text-indigo-500 text-xs sm:text-sm md:text-base " + fugazOne.className}>{mood}</p>
            </button>
          )
        })}
      </div>
      <Calendar />
    </div>
  )
}
