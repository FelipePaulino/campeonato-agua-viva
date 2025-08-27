import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { CartolaProvider } from "@/context/cartolaContext";
import { JogadoresProvider } from "@/context/jogadoresContext";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { UsuarioProvider } from "@/context/userContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <UsuarioProvider>
          <CartolaProvider>
            <JogadoresProvider>
              <Navbar />
              <Component {...pageProps} />
            </JogadoresProvider>
          </CartolaProvider>
        </UsuarioProvider>
      </AuthProvider>
    </SnackbarProvider>
  );

}
