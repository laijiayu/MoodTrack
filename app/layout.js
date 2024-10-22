import Link from "next/link"
import "./globals.css"
import { Fugaz_One, Open_Sans } from "next/font/google"
import { AuthProvider } from "@/context/AuthContext"
import Head from "./head"

const fugazOne = Fugaz_One({ subsets: ["latin"], weight: ["400"] })
const OpenSans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "MOOD",
  description: "Record your mood every day",
}

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugazOne.className}>MOOD TRACKING</h1>
      </Link>
      <div className="flex items-center justify-between">PLACEHOLDER | CTA</div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={"text-indigo-600 " + fugazOne.className}>Created by Allison 🐧</p>
    </footer>
  )
  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700" +
            OpenSans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  )
}
