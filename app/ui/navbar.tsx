"use client"

import Link from "next/link"
import Image from "next/image"
import {usePathname} from "next/navigation"
import {useState} from "react"
import clsx from "clsx"
import Breadcrumbs from "@app/ui/breadcrumbs";

const links = [
    { href: "/", label: "Event" },
    { href: "/studio", label: "Liquid Glass" },
    { href: "/register", label: "Register" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="bg-stone-900 border-b border-stone-800 text-white z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/img/apple-plume.png"
                            alt="Go to home"
                            width={50}
                            height={50}
                            className="h-10 w-10"
                            priority/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Event
                    </span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-400 rounded-lg md:hidden hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-600"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 17 14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    <div className={clsx("w-full md:block md:w-auto", isOpen ? "block" : "hidden")}>
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-stone-700 rounded-lg bg-stone-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-stone-900">
                            {links.map(({href, label}) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={clsx(
                                            "block py-2 px-3 rounded-sm md:p-0 transition-colors",
                                            pathname === href
                                                ? "text-blue-400"
                                                : "text-stone-300 hover:text-white hover:bg-stone-700 md:hover:bg-transparent"
                                        )}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <Breadcrumbs/></>
)
}
