import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal/CartModal';
import Header from '../../components/Header/Header';
import ProductList from '../../components/ProductList/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useState } from 'react';

interface IHeaderProps{
  setOpenCart:React.Dispatch<React.SetStateAction<boolean>>
}
const ShopPage = () => {
const [openCart,setOpenCart]=useState (false)
  return(

<StyledShopPage>
  {openCart? <CartModal setOpenCart={setOpenCart} />:null}
 
    <Header setOpenCart={setOpenCart}/>
    <main>
      <StyledContainer containerWidth={1300}>
        <ProductList />
      </StyledContainer>
    </main>
  </StyledShopPage>
  )
}
  


export default ShopPage;
