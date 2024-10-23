"use client"
import React from "react"
import Link from "next/link"
import Button from "./Button"
import { useAuth } from "@/context/AuthContext"

export const CallToAction = () => {
  const { currentUser } = useAuth()

  if (currentUser) {
    return (
      <div>
        <Link href={"/dashboard"}>
          <Button full dark text="Go To Dashboard"></Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
      <Link href="/dashboard">
        <Button text="Login" />
      </Link>
      <Link href="/dashboard">
        <Button text="Sign Up" dark />
      </Link>
    </div>
  )
}
