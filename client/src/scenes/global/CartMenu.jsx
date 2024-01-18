import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isCartOpen } = useSelector((state) => state.cart);

  return (
    <div>
      <ul
        className={
          isCartOpen
            ? " absolute top-0 left-0 md:w-1/2 h-screen bg-[#29ff89] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li> list of products</li>
      </ul>
    </div>
  );
};

export default CartMenu;
