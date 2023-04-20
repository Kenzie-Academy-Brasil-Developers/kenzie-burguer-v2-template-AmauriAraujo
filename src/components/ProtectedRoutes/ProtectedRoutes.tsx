import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";
import { CartProvider } from "../../providers/CartContext";
export const ProtectedRoutes = () => {
  const { user,loadList } = useContext(UserContext);


if(loadList){
    return <div>Carregando...</div>
}
  return user ? <CartProvider> <Outlet />  </CartProvider>: <Navigate to="/" />;
};
