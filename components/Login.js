import React from "react"
import Button from "./Button"
import { Fugaz_One } from "next/font/google"

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] })

export default function Login() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-3xl sm:text-4xl md:text-5xl " + fugazOne.className}>Login / Sign Up</h3>
      <input
        placeholder="Email"
        className="rounded-full border-solid border-indigo-400 border max-w-[400px] w-full mx-auto px-6 sm:px-10 py-2 sm:py-3 hover:border-indigo-600 focus:border-indigo-600 outline-none duration-200"
      />
      <input
        placeholder="Password"
        type="password"
        className="rounded-full border-solid border-indigo-400 border max-w-[400px] w-full mx-auto px-6 sm:px-10 py-2 sm:py-3 hover:border-indigo-600 focus:border-indigo-600 outline-none duration-200"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button text="Submit" full className={" " + fugazOne.className} />
      </div>
      <p>
        Don&#39;t have an account? <span className={"text-indigo-600 " + fugazOne.className}>Sign Up</span>
      </p>
    </div>
  )
}
