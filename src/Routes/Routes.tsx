import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import ShopPage from "../pages/ShopPage/ShopPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes/Public Routes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path="/register" element={<PublicRoutes />}>
        <Route index element={<RegisterPage />} />
      </Route>

      <Route path="/shop" element={<ProtectedRoutes />}>
        <Route index element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
