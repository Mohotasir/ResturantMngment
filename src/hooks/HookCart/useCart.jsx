import { useQuery } from "@tanstack/react-query";
import useAxiosSecqure from "../Axios/useAxiosSecqure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


export default function useCart() {
    const axioxSecqure = useAxiosSecqure();
    const {user} = useContext(AuthContext)
   const {refetch ,data : cart = []} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn : async()=>{
        const res = await axioxSecqure.get(`/cart?email=${user.email}`);
        return res.data;
    }

   })
   return [cart,refetch];
}
