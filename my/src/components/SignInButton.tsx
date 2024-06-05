"use client"

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button onClick={() => signIn("foobar")}>Sign in </button>
  )
}

export default SignInButton;
