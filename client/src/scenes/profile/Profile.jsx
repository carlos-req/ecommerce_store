import ButtonOutlined from "../../components/ButtonOutlined";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { firstName } = user;

  // const orders = useContext(ShopContext);
  // fetch orders from database
  const orders = {};

  return (
    <main className="w-full h-screen mx-auto mt-32">
      <section className="flex flex-col items-center justify-between gap-4 md:px-20 lg:flex-row ">
        <h1 className="text-2xl font-bold uppercase text-primary">
          Welcome back, {firstName ? firstName : "Guest"}! 👋
        </h1>
        <ButtonOutlined
          width="20rem"
          title="Logout"
          textSize="md"
          onClick={() => {
            logout();
            navigate("/");
          }}
        />
      </section>

      <section className="flex flex-col flex-wrap items-center justify-center gap-8">
        <h3 className="mt-10 text-xl uppercase text-primary">My orders</h3>
        {/* Table of ourders */}
        {orders.length > 0 && (
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 ">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden ">
                  <table className="min-w-full text-center text-primary ">
                    <thead className="font-medium border-b ">
                      <tr>
                        <th scope="col" className="px-6 py-2">
                          Order Id
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Items
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-2">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.map((order) => (
                        <tr className="border-b" key={order._id}>
                          <td className="px-6 py-2 font-medium whitespace-nowrap">
                            {order._id}
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            {order.items}
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            {order.prices}
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap">
                            {order.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProfilePage;
