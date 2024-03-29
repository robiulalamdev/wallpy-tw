/* eslint-disable react/prop-types */

import { createContext, useMemo, useState } from "react";
import { TOKEN_NAME } from "../lib/config";
import { useGetUserQuery } from "../redux/features/users/usersApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data, refetch, isLoading } = useGetUserQuery();

  const [user, setUser] = useState(null);

  useMemo(() => {
    if (data?.success) {
      setUser(data?.data);
    }
  }, [data]);

  const logout = async () => {
    localStorage.removeItem(TOKEN_NAME);
    setUser(null);
  };

  const contextValue = {
    user,
    setUser,
    refetch,
    isLoading: isLoading,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
