"use client"

import React, { useState } from "react"
import Button from "./Button"
import { Fugaz_One } from "next/font/google"
import { useAuth } from "@/context/AuthContext"

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] })

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegister, setIsRegister] = useState(false)
  const [authenticating, setAuthenticating] = useState(false)
  const { signup, login } = useAuth()

  async function handleSubmit() {
    if (!email || !password || password.length < 6) {
      return
    }
    setAuthenticating(true)
    try {
      if (isRegister) {
        console.log("Signing up a new user")
        await signup(email, password)
      } else {
        console.log("Logging in existing user")
        await login(email, password)
      }
    } catch (err) {
      console.log(err.message)
    } finally {
      setAuthenticating(false)
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-3xl sm:text-4xl md:text-5xl " + fugazOne.className}>{isRegister ? "Register" : "Login"}</h3>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="rounded-full border-solid border-indigo-400 border max-w-[400px] w-full mx-auto px-6 sm:px-10 py-2 sm:py-3 hover:border-indigo-600 focus:border-indigo-600 outline-none duration-200"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="rounded-full border-solid border-indigo-400 border max-w-[400px] w-full mx-auto px-6 sm:px-10 py-2 sm:py-3 hover:border-indigo-600 focus:border-indigo-600 outline-none duration-200"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting..." : "Submit"}
          full
          className={" " + fugazOne.className}
        />
      </div>
      <p>
        {isRegister ? "Already have an account?" : "Don't have an account? "}{" "}
        <button onClick={() => setIsRegister(!isRegister)} className={"text-indigo-600 " + fugazOne.className}>
          {isRegister ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  )
}
