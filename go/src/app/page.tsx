"use client";

import {getProviders, signIn, useSession} from "next-auth/react";
import {useEffect} from "react";

const Home = () => {
  const session = useSession();

  if (session) {
    return (
      <main className="h-screen flex flex-col items-center justify-center">
        <div className="p-6">
          Hello world
        </div>
      </main>
    );
  }

  console.log('auto sign in ...');
  const providers = getProviders()
  signIn(providers['foobar']);

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <div className="p-6">
        ...
      </div>
    </main>
  )

}

export default Home
