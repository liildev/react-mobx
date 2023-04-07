import { createContext } from "react";
import { LoginStore } from "./login";
import { ProductsStore } from "./product";

export interface IRootStore {
  loginStore: LoginStore;
  productsStore: ProductsStore;
}

export class RootStore implements IRootStore {
  loginStore: LoginStore;
  productsStore: ProductsStore;

  constructor() {
    this.loginStore = new LoginStore(this);
    this.productsStore = new ProductsStore(this);
  }
}


export const rootStoreContext = createContext({
  rootStore: new RootStore(),
});
