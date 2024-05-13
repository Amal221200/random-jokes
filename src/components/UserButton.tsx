"use client"

import { LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { Button } from "./ui/button"
import { useCallback } from "react"


const UserButton = () => {
    const session = useSession()

    const handleClick = useCallback(async () => {
        await signOut()
    }, [])

    if (session.status === "unauthenticated") {
        return null
    }


    return (
        <Button type="button" onClick={handleClick} variant="ghost" className="flex items-center gap-2">
            <Image src={session.data?.user?.image || '/vercel.svg'} alt="" width={30} height={30} className="rounded-full" />
            <LogOut />
        </Button>
    )
}

export default UserButton