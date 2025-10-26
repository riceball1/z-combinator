"use client";

import Button from "./Button";
import Link from "next/link";
import { useState, useEffect } from 'react'


export default function Nav() {
    const [isAuth, setIsAuth] = useState(false)

    const [buttonText, setButtonText] = useState("Login")

    useEffect(() => {
        setButtonText( isAuth ? "Sign Out" : "Login")
    }, [isAuth])


    return (
        <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-black">
                    <Link href="/">Z Combinator</Link>
                </div>
                <nav className="hidden md:flex space-x-8 text-sm items-center">
                    <Link href="/build" className="text-black hover:text-green-800">Build a startup</Link>
                    <Link href="/work" className="text-black hover:text-green-800">Work at a startup</Link>
                    <Button isPrimary={!isAuth} text={buttonText} onClick={() => setIsAuth(prev => !prev)} />
                </nav>
            </div>
        </div>
    )
}