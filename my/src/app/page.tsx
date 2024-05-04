import { authServerSession } from "@/components/auth/auth";

const Home = async () => {

  const session = await authServerSession();

  if (session && session.user) {
    return (
      <main className="min-h-screen flex flex-col">
        <header className="h-24 bg-gray-800 flex justify-center items-center">
          <div>Welcome {session.user.name}</div>
        </header>
        <iframe
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
      Sign in ...
    </>
  )
}

export default Home
