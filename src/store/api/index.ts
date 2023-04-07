import { api } from "../../utils";

const login = async (body: IBody) => {
  const { data } = await api().post(`auth/login`, body);

  return data;
};

const fetchUsers = async (): Promise<IUserDetail[]> => {
  const { data } = await api().get("users");

  return data;
};

const fetchProduct = async (id: string | undefined): Promise<IProduct> => {
  const { data } = await api().get(`products/${Number(id)}`);

  return data;
};

const fetchProducts = async (): Promise<IProduct[]> => {
  const { data } = await api().get("products");

  return data;
};

export { login, fetchUsers, fetchProduct, fetchProducts };
