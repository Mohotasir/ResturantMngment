
import { Link } from 'react-router-dom'
import banner from '../../../public/assets/others/authentication2.png'
import bgImg from '../../../public/assets/others/authentication.png'
import { useContext,} from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
export default function Signup() {
   
    
    const {createUser,updateProfiles} = useContext(AuthContext)
    
    const handleForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const pass = form.password.value;
        createUser(email,pass)
        .then(result =>{
            const user = result.user;
            console.log(user)
            updateProfiles(name,photo)
            .then()

        })
    }
    
  return (
    <div className="h-[100vh] flex justify-center items-center" style={{backgroundImage:`url(${bgImg})`}}>
        <div className='flex flex-col  p-16 md:flex-row items-center justify-center shadow-xl border'>
            <div className='md:w-1/2'>
                <img className='' src={banner} alt="" />
            </div>
            <div className='md:w-1/2'>
                <form onSubmit={handleForm} className='flex flex-col gap-2 border p-6'>
                    <label htmlFor="name">Name</label>
                    <input className='border-none outline-none text-lg p-2 rounded' type="text" name="name" id="name" />
                    <label htmlFor="photo">Photo URL</label>
                    <input className='border-none outline-none text-lg p-2 rounded' type="text" name="photo" id="photo" />
                    <label htmlFor="email">Email</label>
                    <input className='border-none outline-none text-lg p-2 rounded' type="email" name="email" id="email" />
                    <label htmlFor="pass">Password</label>
                    <input className='border-none outline-none text-lg p-2 rounded' type="password" name="" id="password" />
                    <button  className='text-md font-semibold btn bg-orange-300' type="submit">Sign up</button>
                    
                </form>
                <div>
                      <p>Already have an account ? Log in <Link to="/login">here</Link></p>  
                </div>
            </div>
        </div>
    </div>
  )
}
