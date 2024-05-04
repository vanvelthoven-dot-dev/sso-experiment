import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"

const authOptions = {
  debug: true,
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    {
      id: "foobar",
      name: "Foobar",
      type: "oauth",
      clientId: process.env.ZITADEL_CLIENTID,
      clientSecret: "", // Using PKCE
      wellKnown: "https://zitadel.foobar.test/.well-known/openid-configuration",
      redirect_uri: "https://zitadel.foobar.test/api/auth/callback/foobar",
      authorization: { params: { scope: "openid email profile" } },
      idToken: true,
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }
  ],
} satisfies NextAuthOptions

const authServerSession = (
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) => {
  return getServerSession(...args, authOptions)
}

export { authOptions, authServerSession };
