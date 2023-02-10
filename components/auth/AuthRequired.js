import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function AuthRequired({ children }) {
  const { data: session } = useSession();
  const router = useRouter();

  // null = unauthenticated
  // undefined = loading
  if (session === null) {
    router.push("/");
  }

  return children;
}
