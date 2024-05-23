"use client"

import { api } from "@convex/_generated/api";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";

export default function Home() {

  const {isAuthenticated} = useConvexAuth()

  return (
    <div className="w-screen h-screen">
      <UserButton/>
    </div>
  );
}
