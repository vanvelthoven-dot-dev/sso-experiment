import NextAuth from "next-auth"
import { authOptions } from "@/components/auth/auth"
import { NextApiRequest, NextApiResponse } from "next";

const nextAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, authOptions)
}

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req,res, authOptions)
}

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req,res, authOptions)
}

export { GET, POST, nextAuth }
