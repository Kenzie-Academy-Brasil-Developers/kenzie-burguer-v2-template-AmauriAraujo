import { createContext, useEffect, useState } from "react";
import { api } from "../services/Api";

interface ICartProviderProps {
    children: React.ReactNode;
  }

  
 export interface IProducts{
    id: number;
    category: string;
    name: string;
   price: number;
  img: string;
}

interface ICartContext{
    productsList: IProducts[]
}
  
export const CartContext =createContext({} as ICartContext)

export const CartProvider=({children}:ICartProviderProps)=>{

    const[productsList,setProductsList]=useState<IProducts[]>([])

 

useEffect(()=>{
    const token = localStorage.getItem("@TOKEN");
    const getProducts=async()=>{
        try {
            const response = await api.get<IProducts[]>("/products",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setProductsList(response.data)
            
        } catch (error) {
            console.log(error)
        }
        
    }
getProducts()


},[])
    return(

        <CartContext.Provider value={{productsList}}>
            {children}
        </CartContext.Provider>
    )
}