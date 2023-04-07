/// <reference types="vite/client" />

interface IBody {
  username: string;
  password: string;
}

interface IRating {
  rate: number;
  count: number;
}

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

interface IUserDetail {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}
