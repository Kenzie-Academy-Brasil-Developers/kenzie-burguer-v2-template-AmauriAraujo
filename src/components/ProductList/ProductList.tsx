import { useContext } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { StyledProductList } from "./style";
import { CartContext } from "../../providers/CartContext/CartContext";

const ProductList = () => {
  const { productsList } = useContext(CartContext);
  return (
    <StyledProductList>
      {productsList.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </StyledProductList>
  );
};

export default ProductList;
