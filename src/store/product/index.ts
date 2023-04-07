import { IRootStore } from "..";
import { fetchProduct, fetchProducts } from "../api";
import {
  action,
  computed,
  observable,
  runInAction,
  makeObservable,
} from "mobx";

export class ProductsStore {
  rootStore: IRootStore;
  @observable
  loading = {
    product: false,
    products: false,
  };
  @observable
  error: boolean = false;
  @observable
  products: IProduct[] = [];
  @observable
  product: IProduct = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  };

  constructor(rootStore: IRootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  async fetchProducts() {
    try {
      this.loading.products = true;
      const products = await fetchProducts();

      runInAction(() => {
        this.products = products;
        this.loading.products = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = true;
      });
    }
  }

  @action
  async fetchProduct(id: string | undefined) {
    try {
      this.loading.product = true;
      const product = await fetchProduct(id);

      runInAction(() => {
        this.product = product;
        this.loading.product = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = true;
      });
    }
  }

  @computed
  get getError() {
    return this.error;
  }

  @computed
  get getLoading() {
    return this.loading;
  }

  @computed
  get getProduct() {
    return this.product;
  }

  @computed
  get getProducts() {
    return this.products;
  }
}
