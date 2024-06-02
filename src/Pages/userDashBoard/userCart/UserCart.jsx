import swal from "sweetalert";
import useCart from "../../../hooks/HookCart/useCart";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import useAxiosSecqure from "../../../hooks/Axios/useAxiosSecqure";

export default function UserCart() {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, itm) => total + itm.price, 0);
  const axiosqre = useAxiosSecqure();
  const handleDelete = async (_id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (willDelete) {
      axiosqre
        .delete(`cart/${_id}`)
        .then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            swal("Your data has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Error!", "Failed to delete the post.", "error");
          }
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          swal("Error!", "Failed to delete the post.", "error");
        });
    }
  };
  return (
    <div className="bg-gray-100 h-full py-3">
      <SectionHeader
        heading={"----My Cart----"}
        subHeading={"WANNA ADD MORE?"}
      ></SectionHeader>
      <div className="py-6 my-6 bg-white rounded-sm m-12">
        <div className="flex justify-between p-6 text-2xl font-semibold">
          <h1>Total Order : {cart.length}</h1>
          <h1>Total Price : {totalPrice}</h1>
          <button className="btn bg-orange-400">Pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-orange-300">
                <th>Item image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((c) => (
                <tr key={c._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={c.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{c.name}</td>
                  <td>{c.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="btn bg-red-500 btn-xs"
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
