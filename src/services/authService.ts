import { auth, db } from "./firebaseConfig";
import { ref, set, update } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Registrar usuário com email/senha
export async function registrarUsuario(email: string, senha: string, nome: string, telefone: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  const user = userCredential.user;

  await set(ref(db, `usuarios/${user.uid}`), {
    nome,
    telefone,
    email,
  });

  return user;
}

// Login com email/senha
export async function loginUsuario(email: string, senha: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, senha);
  return userCredential.user;
}

// Logout
export async function logoutUsuario() {
  await signOut(auth);
}

// Login com Google
export async function loginComGoogle() {
  const provider = new GoogleAuthProvider();
  const userCredential = await signInWithPopup(auth, provider);
  const user = userCredential.user;

  // 🔁 "Merge" no Realtime DB = use update()
  const userRef = ref(db, `usuarios/${user.uid}`);
  await update(userRef, {
    nome: user.displayName ?? "",
    email: user.email ?? "",
    telefone: "", // Pode atualizar depois
  });

  return user;
}
