"use client";

import {signIn, useSession} from "next-auth/react";

const Home = () => {
  const session = useSession();

  if (session && session.status === "authenticated") {
    return (
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="p-6">
          Hello {session.data.user?.name}
        </div>
      </main>
    );
  }

  signIn("foobar");

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="p-6">
        ...
      </div>
    </main>
  )

}

export default Home
