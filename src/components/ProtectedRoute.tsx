// src/components/ProtectedRoute.tsx
import { useAuthHooks } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuthHooks();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) return <p>Carregando...</p>;

  return <>{children}</>;
}
