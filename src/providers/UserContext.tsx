import React, { createContext, useEffect, useState } from "react";
import { ILoginFormData } from "../components/Form/LoginForm/LoginForm";
import { IRegisterFormData } from "../components/Form/RegisterForm/RegisterForm";
import { api } from "../services/Api";
import { useNavigate } from "react-router-dom";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
    user:IUser|null;
    loadList:boolean;
  userLogin: (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  userRegister: (
    formData: IRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;

  logout: () => void
}

interface IUser {
  email: string;
  name: string;
  id: string;
}

interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
  
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  const[loadList,setloadList]=useState(true)

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    const autoLogin = async (setLoadList:React.Dispatch<React.SetStateAction<boolean>>)=> {
      try {
        const response = await api.get<IUser>(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        navigate("/shop");
      } catch (error) {
        console.log(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
      }
      finally{
        setloadList(false)
      }
    };
    if (token && id) {
        autoLogin(setloadList);

    }else{
        setloadList(false)
        navigate("/")
    }
    
  }, []);

  const userLogin = async (
    formData: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      navigate("/shop");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (
    formData: IRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<IUserRegisterResponse>("/users", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout=()=>{
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null)
    navigate("/")

  }

  return (
    <UserContext.Provider value={{ user,userLogin, userRegister,loadList,logout }}>
      {children}
    </UserContext.Provider>
  );
};
