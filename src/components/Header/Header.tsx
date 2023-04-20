import { MdShoppingCart, MdLogout } from "react-icons/md";

import SearchForm from "./SearchForm/SearchForm";
import { StyledHeader } from "./style";
import LogoKenzieBurguer from "../../assets/LogoKenzieBurguer.svg";

import { StyledContainer } from "../../styles/grid";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { CartContext } from "../../providers/CartContext/CartContext";

export interface IHeaderProps {
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setOpenCart }: IHeaderProps) => {
  const { logout } = useContext(UserContext);

  const{ cartProducts}=useContext(CartContext)

  const { backAllProducts } = useContext(CartContext);

  return (
    <StyledHeader onClick={() => backAllProducts()}>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button id="cart-btn"
                type="button"
                onClick={() => {
                  setOpenCart(true);
                }}
              >
                <p>{cartProducts.length}</p>
                <MdShoppingCart size={28} />
              </button>
              <button type="button" onClick={() => logout()}>
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
