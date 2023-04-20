import { MdDelete } from "react-icons/md";
import { StyledCartProductCard } from "./style";
import { StyledTitle } from "../../../../styles/typography";
import { ICartProps } from "../../../ProductList/ProductCard/ProductCard";
import { useContext } from "react";
import { CartContext } from "../../../../providers/CartContext/CartContext";

const CartProductCard = ({ product }: ICartProps) => {
  const { removeProduct } = useContext(CartContext);
  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="contentBox">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <button
          onClick={() => removeProduct(product.id)}
          type="button"
          aria-label="Remover"
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
