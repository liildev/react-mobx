import { useEffect } from "react";
import { useRootStore } from "../context";

export default function useProduct(id: string | undefined) {
  const {
    rootStore: { productsStore },
  } = useRootStore();

  useEffect(() => {
    productsStore.fetchProduct(id);
  }, []);

  return { productsStore };
}
