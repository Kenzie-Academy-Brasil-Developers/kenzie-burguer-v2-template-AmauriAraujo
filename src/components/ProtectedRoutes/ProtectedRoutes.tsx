import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user,loadList } = useContext(UserContext);
console.log(loadList)

if(loadList){
    return <div>Carregando...</div>
}
  return user ? <Outlet /> : <Navigate to="/" />;
};
