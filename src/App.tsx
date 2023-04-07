import { observer } from "mobx-react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login, Product, ProductDetails } from "./pages";

import Layout from "./layout";

const App = observer(() => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={"/products"} />} />

      <Route element={<Layout />}>
        <Route path="/products" element={<Product />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/sign-in" element={<Login />} />
      </Route>
    </Routes>
  );
});

export default App;
