"use client"

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: 'https://my.foobar.test/seeyoulater' })}>Sign out</button>
  )
}

export default SignOutButton;
