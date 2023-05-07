import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import {
  isCartOpenSelector,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

function CartIcon() {
  const isCartOpen = useSelector(isCartOpenSelector);
  const cartItemCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
