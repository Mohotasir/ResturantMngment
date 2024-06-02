
import { Link } from 'react-router-dom'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';import bgImg from '../../../public/assets/others/authentication.png'
import banner from '../../../public/assets/others/authentication2.png'
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
export default function Loginl() {
    const captchaRef = useRef(null);
    const [disabled,setDisabled] = useState(true)
    const {signInUser} = useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.email.value;
        const pass = form.password.value;
        //const  formData = {name,pass}
        signInUser(name,pass)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
    }
    const handleValidate = ()=>{
       const value = captchaRef.current.value;
       if (validateCaptcha(value)) {
        setDisabled(false)
    }

    else {
        setDisabled(true)
        alert("not match captcha")
    }
    }
  return (
    <div className="h-[100vh] flex justify-center items-center" style={{backgroundImage:`url(${bgImg})`}}>
        <div className='flex flex-col  p-16 md:flex-row items-center justify-center shadow-xl border'>
            <div className='md:w-1/2'>
                <img className='' src={banner} alt="" />
            </div>
            <div className='md:w-1/2'>
                <form onSubmit={handleForm} className='flex flex-col gap-2 border p-6'>
                    <label htmlFor="email">Email</label>
                    <input className='border-none outline-none text-lg p-2 rounded' type="email" name="email" id="email" />
                    <label htmlFor="pass">Password</label>
                    <input className='border-none outline-none text-lg p-2 rounded' type="password" name="" id="password" />
                    <div>  
                    <LoadCanvasTemplate />
                    </div>
                    <label htmlFor="captcha"></label>
                    <input ref={captchaRef} className='border-none outline-none text-lg p-2 rounded' type='text'  name="captcha"  />
                    <button onClick={handleValidate} className='btn btn-sm'>validate</button>
                    <button disabled={disabled} className='text-md font-semibold btn bg-orange-300' type="submit">Log in</button>
                    
                </form>
                <div>
                      <p>New here ? create a <Link to="/signup">New account</Link></p>  
                </div>
            </div>
        </div>
    </div>
  )
}
