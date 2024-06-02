import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosPublic from "../../../hooks/Axios/useAxiosPublic";


export default function SocialLogin() {
    const {signInWithGoogle} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const handleLogin = () =>{
        signInWithGoogle()
         .then(res =>{
            const usrInfo = {
                name: res.user?.displayName,
                email: res.user?.email
            }
            axiosPublic.post('/users',usrInfo)
            .then(res=>{
                console.log(res.data);
            })
         })
    }
  return (
    <div className="text-center">
         <div onClick={handleLogin} className="border-2 btn bg-orange-200 rounded-sm flex gap-2 text-lg justify-center items-center">
            <h1>Log in with</h1>
             <FaGoogle></FaGoogle>
         </div>
    </div>
  )
}
