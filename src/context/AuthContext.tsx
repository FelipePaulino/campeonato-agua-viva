// context/AuthContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  email: string | null;
  isAdmin: boolean;
  login: (email: string, isAdmin: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const login = (userEmail: string, admin: boolean) => {
    setEmail(userEmail);
    setIsAdmin(admin);
  };

  const logout = () => {
    setEmail(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ email, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
