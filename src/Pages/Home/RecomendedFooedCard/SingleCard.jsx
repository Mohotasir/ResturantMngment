import { useContext,} from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from '../../../hooks/HookCart/useCart';
export default function SingleCard({item}){
  const {image,recipe,name,_id,price} = item;
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const [,refetch] = useCart();
  //const axioxSecqure = useAxiosSecqure();
   const handleCart = ()=>{
       if(user && user.email){
        const cartItem = {
           menuId : _id,
           userEmail : user.email,
           name,image,price
        }
          axios.post('http://localhost:5000/cart',cartItem)
          .then(res=>{
            console.log(res.data)
            swal("added cart data successfully!");
            refetch();
          })
       }else{
          navigate("/login")
       }
   }
  return (
      <div className=" bg-base-100 shadow-xl">
        <figure className="p-6">
          <img
            src={image}
            alt=""
            className="rounded-lg border w-full h-[40vh]"
          />
        </figure>
        <div className="flex flex-col items-center justify-center pb-8 px-4 text-center">
          <h2 className="card-title">{name}</h2>
          <p className="my-2">{recipe}</p>
          <div className="card-actions">
            <button onClick={handleCart} className="btn border-b-amber-200 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    
  );
}
