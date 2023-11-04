import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { BsFillHouseDownFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillUnlock, AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import {BiLogoGooglePlus } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { signIn,signInWithGoogle } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
    };

    const handleGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const googleUser = result.user
            console.log(googleUser)
            navigate(from, {replace:true})
        })
    }

    return (
        <div>
            <div className='login-banner py-20'>
                <div className='z-10 relative py-2 lg:px-20 md:px-16 sm:px-12 px-12 flex items-center space-x-3 flex-wrap text-base font-bold cursor-pointer'>
                    <p className='hover:text-[#006DB4] duration-300'>
                        <Link to='/'>
                            Home
                        </Link>
                    </p>
                    <p>/</p>
                    <p>Login</p>
                </div>
            </div>

            <div className='py-2 lg:px-20 md:px-16 sm:px-12 px-12'>
                <h2 className='text-4xl text-[#333333] font-black py-4 title-text mt-8'>Log in now !</h2>

                <div className='grid lg:grid-cols-2 gap-6 py-8'>

                    <div className='border px-6 py-8 relative'>
                        <h2 className='text-2xl font-bold text-[#333333] title-text py-2'>Log in via your institution</h2>
                        <h2 className='flex items-center space-x-2 text-lg font-medium text-[#333333] border-b pb-2'><span><BsFillHouseDownFill></BsFillHouseDownFill></span><span className='hover:text-[#006DB4] cursor-pointer duration-300'>Access through your institution</span></h2>
                        <h2 className='py-4 text-[#10147E] text-lg font-bold title-text'>Log in to Taylor & Francis Online</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                            <div className='w-full py-2 px-4 border flex items-center'>
                                <p className='flex items-center text-xl'><MdEmail></MdEmail><sup className='text-[#F29500]'>*</sup></p>
                                <input
                                    {...register("email", { required: true })}
                                    className='outline-none w-full px-2' type="text" placeholder='Your email address' />
                            </div>
                            <div className="">
                                {errors.email && <span className='text-[red] py-1'>Enter Email</span>}
                            </div>

                            <div className='w-full py-2 px-4 border flex items-center'>
                                <p className='flex items-center text-xl'><AiFillUnlock></AiFillUnlock><sup className='text-[#F29500]'>*</sup></p>
                                <input
                                    {...register("password", { required: true })}
                                    className='outline-none w-full px-2' type={show ? "text" : "password"} placeholder='Your password' />
                                <p onClick={handleClick} className='text-xl cursor-pointer'>{show ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</p>
                            </div>
                            <div className="">
                                {errors.password && <span className='text-[red] py-1'>Enter password</span>}
                            </div>


                            <div className='right-6 absolute'>
                                <p className='font-medium text-sm cursor-pointer hover:text-[#006DB4] duration-300'>Forgot password?</p>
                            </div>
                            <div className='py-4'>
                                <div className='flex items-center space-x-2'>
                                    <input type="checkbox" name="" id="" />
                                    <p className='text-sm'>
                                        Keep me logged in (not suitable for shared devices).
                                    </p>
                                </div>
                                <p className='py-2 text-[#5c5c5c]'>You will otherwise be logged out automatically, after a limited period, and will need to log in again.</p>
                            </div>
                            <div className=''>
                                <input className='py-3 px-6 bg-[#10147E] text-white font-medium rounded hover:bg-[#006DB4] duration-300 cursor-pointer' type="submit" value="Log in" />
                            </div>
                        </form>

                        <div className='flex flex-col items-center justify-center'>
                            <p className='text-xl font-medium py-2 text-[#262626] title-text'>Log in with</p>
                            <p onClick={handleGoogle} className='text-3xl px-2 py-2 border rounded-full bg-[#10147E] text-white hover:bg-[#006DB4] duration-300 cursor-pointer'><BiLogoGooglePlus></BiLogoGooglePlus></p>
                        </div>
                    </div>

                    <div>
                        <div className='space-y-2 text-[#5c5c5c]'>
                            <p>
                                If your login is unsuccessful, please use the Forgot password? link to reset your password.
                            </p>
                            <p>
                                Using a token? Please log in or register to redeem your token and gain access.
                            </p>
                        </div>

                        <div className='py-4'>
                            <h2 className='text-2xl text-[#333333] font-black py-4 title-text'>No account?</h2>
                            <p className='font-medium text-[#5c5c5c]'>If your are new here plz <span className='text-[#262626] font-bold cursor-pointer hover:text-[red] duration-300'>
                                <Link to='/singup'>register</Link>
                            </span> now!</p>

                            <div className='mt-8'>
                                <Link to='/singup'><buttom className='py-3 px-6 bg-[#10147E] text-white font-medium rounded hover:bg-[#006DB4] duration-300 cursor-pointer'>

                                    Register
                                </buttom>
                                </Link>
                            </div>


                        </div>


                        <div className='mt-4'>
                            <h2 className='text-2xl text-[#333333] font-black py-4 title-text'>Restore content access for purchases made as guest</h2>
                            <div className='mt-4'>
                                <buttom className='py-3 px-6 bg-[#10147E] text-white font-medium rounded hover:bg-[#006DB4] duration-300 cursor-pointer'>
                                    Restore Content Access
                                </buttom>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;