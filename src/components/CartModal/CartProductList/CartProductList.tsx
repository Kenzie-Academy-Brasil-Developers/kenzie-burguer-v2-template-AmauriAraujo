import CartProductCard from "./CartProductCard/CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext/CartContext";

const CartProductList = () => {
  const { cartProducts, removeAllProducts, totalCart } =
    useContext(CartContext);
  return (
    <StyledCartProductList>
      <ul>
        {cartProducts.map((product) => {
          return <CartProductCard key={product.id} product={product} />;
        })}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">{`R$: ${totalCart.toFixed(
          2
        )}`}</StyledParagraph>
      </div>
      <StyledButton
        onClick={() => removeAllProducts()}
        $buttonSize="default"
        $buttonStyle="gray"
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
