// src/services/userService.ts
import { db } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import { getAuth } from "firebase/auth";

export async function getDadosUsuarioLogado() {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    return null; // Usuário não está logado
  }

  const snapshot = await get(ref(db, "usuarios/" + user.uid));
  if (snapshot.exists()) {
    return snapshot.val(); // { nome, telefone, email }
  }

  return null;
}
