import CartMenuItem from "../../components/CartMenuItem";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../features/cart/cartSlice";
import { useEffect } from "react";

const Checkout = () => {
  const dispatch = useDispatch();

  const { isCartOpen, cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setIsCartOpen());
  }, [dispatch, isCartOpen]);

  return (
    <main className="flex-1 w-full h-screen mt-20 mb-20">
      <h1>Checkout</h1>

      <div className="flow-root">
        <ul className="">
          {cart?.map((product) => {
            return <CartMenuItem key={product._id} product={product} />;
          })}
        </ul>
      </div>
    </main>
  );
};

export default Checkout;
