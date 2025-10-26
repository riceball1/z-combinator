"use client";

import Button from "./Button";
import NavLink from "./NavLink";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


export default function Nav() {
    const router = useRouter()
    const [isAuth, setIsAuth] = useState(false)
    const [buttonText, setButtonText] = useState("Login")

    useEffect(() => {
        setButtonText( isAuth ? "Sign Out" : "Login")

        if (!isAuth) {
            router.push('/')
        }

    }, [isAuth])

    return (
        <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-black">
                    <Link href="/">Z Combinator</Link>
                </div>
                <nav className="hidden md:flex space-x-8 text-sm items-center">
                    <NavLink url="/fund" text="Fund a startup" />
                    <NavLink url="/work" text="Work at a startup" />
                    {isAuth && (
                        <>
                            <NavLink url="/inbox" text="Inbox" />
                            <NavLink url="/account" text="Account" />
                        </>
                    )}
                    <Button isPrimary={!isAuth} text={buttonText} onClick={() => setIsAuth(prev => !prev)} />
                </nav>
            </div>
        </div>
    )
}