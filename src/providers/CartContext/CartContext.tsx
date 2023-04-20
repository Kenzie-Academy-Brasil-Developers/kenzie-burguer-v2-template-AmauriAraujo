import { createContext, useEffect, useState } from "react";
import { api } from "../../services/Api";
import { ISearchFormData } from "../../components/Header/SearchForm/SearchForm";
import { toast } from "react-toastify";

interface ICartProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  id: number;
  category: string;
  name: string;
  price: number;
  img: string;
}

interface ICartContext {
  productsList: IProducts[];
  addToCart: (newproduct: IProducts) => void;
  cartProducts: IProducts[];
  removeProduct: (id: number) => void;
  removeAllProducts: () => void;
  totalCart: number;
  filterProducts: (FormData: ISearchFormData) => IProducts[];
  backAllProducts: () => void;
}

export const CartContext = createContext({} as ICartContext);

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [cartProducts, setCartProducts] = useState<IProducts[]>([]);
  const [newProductsList, setNewProductsList] = useState<IProducts[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const getProducts = async () => {
      try {
        const response = await api.get<IProducts[]>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProductsList(response.data);
        setNewProductsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const addToCart = (newproduct: IProducts) => {
    if (!cartProducts.some((product) => product.id === newproduct.id)) {
      const productListCart = [...cartProducts, newproduct];
      setCartProducts(productListCart);
      toast.success("Adicionado ao carrinho",{autoClose:2000});
    } else toast.error("Produto já adicionado",{autoClose:2000});
  };

  const removeProduct = (id: number) => {
    const products = cartProducts.filter((product) => {
      return product.id !== id;
    });
    setCartProducts(products);
    toast.success("Produto Removido",{autoClose:2000});
  };

  const removeAllProducts = () => {
    setCartProducts([]);
   toast.success("Carrinho Vazio",{autoClose:2000});
  };

  const totalCart = cartProducts.reduce(
    (previusValue, currentValue) => previusValue + currentValue.price,
    0
  );

  const filterProducts = (FormData: ISearchFormData) => {
    const filter = productsList.filter((products) => {
      return (
        products.name.toUpperCase().includes(FormData.name.toUpperCase()) ||
        products.category.toUpperCase().includes(FormData.name.toUpperCase())
      );
    });
    setProductsList(filter);
    return filter;
  };

  const backAllProducts = () => {
    setProductsList(newProductsList);
  };

  return (
    <CartContext.Provider
      value={{
        productsList,
        addToCart,
        cartProducts,
        removeProduct,
        removeAllProducts,
        totalCart,
        filterProducts,
        backAllProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
