import { CartList } from "./cart-list";
import { HowPay } from "./how-pay";
import { Save4Later } from "./save-for-later";

const Cart = () => {
  return (
    <div>
      <HowPay />
      <CartList />
      <Save4Later />
    </div>
  );
};

export default Cart;
