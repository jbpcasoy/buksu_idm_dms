import useUser from "@/hooks/useUser";

const { createContext } = require("react");

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const user = useUser();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserContext;
