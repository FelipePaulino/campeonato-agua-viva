// src/components/Navbar.tsx
import { useUsuario } from "@/context/userContext";
import { useAuthHooks } from "@/hooks/useAuth";
import { logoutUsuario } from "@/services/authService";
import { useRouter } from "next/router";

export default function Navbar() {
  const { user } = useAuthHooks();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUsuario();
    router.push("/login");
  };

  const { usuario } = useUsuario();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 24px",
      backgroundColor: "#f5f5f5",
      borderBottom: "1px solid #ccc"
    }}>
      {usuario?.nome &&
        <span style={{ fontWeight: 600, fontSize: 18 }}>seja bem vindo {usuario?.nome}</span>
      }
      <div>
        {user ? (
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
            <button
              onClick={() => router.push("/login")}
              style={{
                padding: "8px 12px",
                borderRadius: 6,
                marginRight: 8,
                backgroundColor: "#0070f3",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Login
            </button>
        )}
      </div>
    </nav>
  );
}
