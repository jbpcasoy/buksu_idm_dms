import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { reqLog } from "@/services/api/logger";
import catchAllError from "@/services/middleware/catchAllError";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "../../../../lib/prismadb";

const prismaClient = PRISMA_CLIENT;

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        const id = user.id;

        session.user = await prismaClient.user.findUnique({
          where: {
            id,
          },
          include: {
            ActiveFaculty: {
              include: {
                ActiveChairperson: true,
                ActiveCoordinator: true,
                ActiveDean: true,
                Faculty: {
                  include: {
                    department: {
                      include: {
                        college: true,
                      },
                    },
                  },
                },
              },
            },
            CITLDirector: {
              include: {
                ActiveCITLDirector: true,
              },
            },
            IMDCoordinator: {
              include: {
                ActiveIMDCoordinator: true,
              },
            },
            LoginRole: true,
            Admin: true,
          },
        });
      }
      return session;
    },
  },
};

export default async function handler(req, res) {
  return catchAllError(req, res, async (req, res) => {
    await reqLog(req, res);
    return await NextAuth(req, res, authOptions);
  });
}
