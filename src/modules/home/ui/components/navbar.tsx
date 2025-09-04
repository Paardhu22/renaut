"use client";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserControl } from "@/components/user-control";

export const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-all duration-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Renaut Logo" width={32} height={32} />
          <span className="font-bold text-lg">Renaut</span>
        </Link>

        {/* Right side: Auth buttons */}
        <div className="flex items-center gap-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserControl showName/>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
