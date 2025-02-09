import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Image from "next/image";

function Header() {
  return (

    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">

        <nav className="container mx-auto px-4 py-0 flex items-center justify-between">
            <Link href="/">
            <Image
                src={"/logo2.png"}  
                alt="Expanso"
                height={60}
                width={200} 
                className="h-12 w-auto object-contain"
            />
            </Link>
       


            <div className="flex items-center space-x-4">
                
                <SignedIn>
                    <Link href={"/dashboard"}
                    className="text-gray-600 hover:text-blue-600 flex flex-center gap-2">
                    <Button variant="outline" >
                    <LayoutDashboard size={18} />
                    <span className="hidden md:inline">Dashboard</span>

                    </Button>
                    </Link>

                    <Link href={"/transaction/create"}>
                    <Button className="flex flex-center gap-2" >
                    <PenBox size={18} />
                    <span className="hidden md:inline">Add Transaction</span>

                    </Button>
                    </Link>
                </SignedIn>


                <SignedOut>
                    <SignInButton forceRedirectUrl ="/dashboard">
                        <Button variant="outline" >Login</Button>
                    </SignInButton>
                </SignedOut>

                <SignedIn>
                    <UserButton appearance={{
                        elements:{
                            avatarBox:"w-10 h-10",
                        }
                    }}/>
                </SignedIn>
            </div>

       </nav> 

    </div>
    
  )
}

export default Header