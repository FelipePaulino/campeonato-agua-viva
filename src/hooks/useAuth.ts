// src/hooks/useAuth.ts
import { useEffect, useState } from "react";
import { auth } from "@/services/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";

export function useAuthHooks() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
