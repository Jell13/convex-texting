"use client"

import { api } from "@convex/_generated/api";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  
  const store = useMutation(api.users.store)
  const {isAuthenticated} = useConvexAuth()

  useEffect(() => {
    if(isAuthenticated){
      store()
    }
  })
  return (
    <div className="w-screen h-screen">
      <UserButton/>
    </div>
  );
}
