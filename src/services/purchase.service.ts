import api from "./api";

export type PurchaseItem = {
  produto: string;
  variedade: string;
  pais: string;
  categoria: string;
  safra: string;
  preco: number;
};

export type Purchase = {
  codigo: string;
  data: string;
  cliente: string;
  itens: PurchaseItem[];
  valorTotal: number;
};

export const findAll = (): Promise<Purchase[]> => api.get("/");
