import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { createContext, useContext } from "react";
import { CartContext, IProducts } from "../../../providers/CartContext";
interface ICartProps{
  product:IProducts
}


const ProductCard = ({product}:ICartProps) => {

  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
         {product.name}
        </StyledTitle>
        <StyledParagraph className="category">{product.category}</StyledParagraph>
        <StyledParagraph className="price">{`R$: ${product.price.toFixed(2)}`}</StyledParagraph>
        <StyledButton $buttonSize="medium" $buttonStyle="green">
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};
export default ProductCard;
