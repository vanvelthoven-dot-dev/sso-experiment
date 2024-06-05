import { authServerSession } from "@/components/auth/auth";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";

const Home = async () => {

  const session = await authServerSession();

  if (session && session.user) {
    return (
      <main className="min-h-screen flex flex-col">
        <header className="h-24 bg-gray-800 flex justify-end items-center space-x-2 px-3">
          <div className="flex-1">MY APP</div>
          <div>Welcome {session.user.name}</div>
          <SignOutButton />
        </header>
        <iframe
          id="go"
          src="https://go.foobar.test"
          title="guest"
          allow="geolocation"
          referrerPolicy="origin"
          sandbox="allow-same-origin allow-scripts allow-forms"
          className="flex-1 w-full">
        </iframe>
      </main>
    )
  }

  return (
    <>
      <SignInButton />
    </>
  )
}

export default Home
