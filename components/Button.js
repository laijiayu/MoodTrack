import React from "react"
import { Fugaz_One } from "next/font/google"

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] })

export default function Button(props) {
  const { text, dark, full, clickHandler } = props
  return (
    <button
      onClick={clickHandler}
      className={
        "rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-pink-600 " +
        (dark ? "text-white bg-pink-600 " : "text-pink-600") +
        (full ? "grid place-items-center w-full text-pink-600 " : " ")
      }
    >
      <p className={"px-6 sm:px-10 whitespace-normal py-2 sm:py-3 " + fugazOne.className}>{text}</p>
    </button>
  )
}
