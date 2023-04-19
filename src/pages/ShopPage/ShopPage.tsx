import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal/CartModal';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';

import { StyledContainer } from '../../styles/grid';

const ShopPage = () => {

  return(

<StyledShopPage>
    <CartModal />
    <Header />
    <main>
      <StyledContainer containerWidth={1300}>
        <ProductList />
      </StyledContainer>
    </main>
  </StyledShopPage>
  )
}
  


export default ShopPage;
