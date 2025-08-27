import { CartolaProvider } from "@/context/cartolaContext";
import { JogadoresProvider } from "@/context/jogadoresContext";
import { SnackbarProvider } from "@/context/SnackbarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <CartolaProvider>
        <JogadoresProvider>
          <Component {...pageProps} />
        </JogadoresProvider>
      </CartolaProvider>
    </SnackbarProvider>
  );

}
