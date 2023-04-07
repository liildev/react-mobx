import { useEffect } from "react";
import { useRootStore } from "../context";

export default function useProducts() {
  const {
    rootStore: { productsStore },
  } = useRootStore();

  useEffect(() => {
    productsStore.fetchProducts();
  }, []);

  return { productsStore };
}
