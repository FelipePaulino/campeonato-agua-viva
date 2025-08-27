import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { db } from "@/services/firebaseConfig";

interface Usuario {
  uid: string;
  nome: string;
  telefone: string;
  email: string;
}

interface UsuarioContextType {
  usuario: Usuario | null;
  loading: boolean;
}

const UsuarioContext = createContext<UsuarioContextType>({ usuario: null, loading: true });

export const UsuarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const usuarioRef = ref(db, "usuarios/" + user.uid);
        onValue(usuarioRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            setUsuario({
              uid: user.uid,       // <- Aqui adicionamos o UID
              nome: data.nome,
              telefone: data.telefone,
              email: data.email,
            });
          }
          setLoading(false);
        });
      } else {
        setUsuario(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <UsuarioContext.Provider value={{ usuario, loading }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => useContext(UsuarioContext);
