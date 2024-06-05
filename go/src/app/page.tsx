"use client";

import {signIn, useSession} from "next-auth/react";

const Home = () => {
  const session = useSession();

  if (session && session.status === "authenticated") {
    return (
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="p-6">
          Hello &quot;<span className="font-bold">{session.data.user?.name}</span>&quot; from the GO app
        </div>
      </main>
    );
  }

  // Automatically going into the sign-in flow ...
  signIn("foobar");

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="p-6">
        Not logged in in the GO app
      </div>
    </main>
  )

}

export default Home
