"use client"

import { api } from "@convex/_generated/api";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { useState } from "react";
import Items from "./_components/Items";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

export default function Home() {

  const {isAuthenticated} = useConvexAuth()

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center items-center">
        {isAuthenticated ? <Link href={"/main"}>Main Page</Link> : <SignInButton/>}
      </div>
    </div>
  );
}
