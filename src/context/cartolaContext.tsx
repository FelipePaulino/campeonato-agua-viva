import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import axios from "axios";

export interface CartolaData {
  DiaCartolaAtual: number ;
  cartola: boolean;
}

interface CartolaContextData {
  cartola: CartolaData | null;
  reloadCartola: () => Promise<void>;
  atualizarCartola: (dia: number, estado: boolean) => Promise<void>;
}

const CartolaContext = createContext<CartolaContextData>({
  cartola: null,
  reloadCartola: async () => {},
  atualizarCartola: async () => {},
});

export const CartolaProvider = ({ children }: { children: ReactNode }) => {
  const [cartola, setCartola] = useState<CartolaData | null>(null);

  async function fetchCartola() {
    try {
      const response = await axios.get(
        "https://sistema-fut-ibav-default-rtdb.firebaseio.com/cartola.json"
      );
      const data = response.data;
      const dataArray = Object.values(data || {}) as CartolaData[];
      setCartola(dataArray[dataArray.length - 1] || null);
    } catch (error) {
      console.error("Erro ao buscar cartola:", error);
      setCartola(null);
    }
  }

  async function atualizarCartola(dia: number, estado: boolean) {
    try {
      // Pega a chave do último registro
      const res = await axios.get(
        "https://sistema-fut-ibav-default-rtdb.firebaseio.com/cartola.json"
      );
      const data = res.data;
      const keys = Object.keys(data || {});
      const ultimoId = keys[keys.length - 1];

      if (ultimoId) {
        // Atualiza o registro existente
        await axios.patch(
          `https://sistema-fut-ibav-default-rtdb.firebaseio.com/cartola/${ultimoId}.json`,
          { DiaCartolaAtual: dia, cartola: estado }
        );
      } else {
        // Se não existir nenhum, cria um novo
        await axios.post(
          "https://sistema-fut-ibav-default-rtdb.firebaseio.com/cartola.json",
          { DiaCartolaAtual: dia, cartola: estado }
        );
      }

      // Atualiza o estado local
      fetchCartola();
    } catch (err) {
      console.error("Erro ao atualizar cartola:", err);
    }
  }

  useEffect(() => {
    fetchCartola();
  }, []);

  return (
    <CartolaContext.Provider
      value={{ cartola, reloadCartola: fetchCartola, atualizarCartola }}
    >
      {children}
    </CartolaContext.Provider>
  );
};

export const useCartola = () => useContext(CartolaContext);
