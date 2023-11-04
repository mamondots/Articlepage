import { AiFillDatabase, AiFillFileImage, AiFillUnlock } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiLogoGooglePlus } from "react-icons/bi";




const SingUp = () => {
    const onChange = () => {

    }

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const {createUser,signInWithGoogle} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const startUser = result.user
            console.log(startUser)
            navigate(from, {replace:true})
        })
    }

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
                    <p>Register</p>
                </div>
            </div>

            <div className='py-2 lg:px-20 md:px-16 sm:px-12 px-12'>
                <h2 className='text-4xl text-[#333333] font-black py-4 title-text mt-8'>Register now !</h2>
                <p>Already have an account? <span className="font-bold text-lg text-[#ff5353] hover:text-[#006DB4] duration-300 cursor-pointer"><Link to='/login'>Log in</Link></span> now</p>

                <div className='grid lg:grid-cols-2 gap-6 py-8'>

                    <div className='border px-6 py-8 relative'>
                        <p className="font-medium text-[#646464] flex items-center"><span className="text-xl text-[#F29500] py-4">*</span> fields are compulsory</p>
                        <div >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><HiMail></HiMail><sup className='text-[#F29500]'>*</sup></p>
                                    <input
                                        {...register("email", { required: true })}
                                        className='outline-none w-full px-2' type="email" placeholder='Your email address' />

                                </div>
                                <div className="">
                                    {errors.email && <span className='text-[red] py-1'>Email  is required</span>}
                                </div>



                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><FaUserCheck></FaUserCheck><sup className='text-[#F29500]'>*</sup></p>
                                    <input
                                        {...register("firstName", { required: true })}
                                        className='outline-none w-full px-2' type="text" placeholder='Your first name' />
                                </div>
                                <div className="">
                                    {errors.firstName && <span className='text-[red] py-1'>First Name  is required</span>}
                                </div>

                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><FaUserCheck></FaUserCheck><sup className='text-[#F29500]'>*</sup></p>
                                    <input
                                        {...register("lastName", { required: true })}
                                        className='outline-none w-full px-2' type="text" placeholder='Your last name' />
                                </div>
                                <div className="">
                                    {errors.lastName && <span className='text-[red] py-1'>Last Name  is required</span>}
                                </div>

                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><AiFillFileImage></AiFillFileImage></p>
                                    <input
                                        {...register("photoURL", { required: true })}
                                        className='outline-none bg-transparent border-transparent w-full px-2' type="file" />
                                </div>
                                <div className="">
                                    {errors.photoURL && <span className='text-[red] py-1'>Photo  is required</span>}
                                </div>

                                <div className='w-full flex flex-col space-y-2 hover:border-[#262626] duration-300'>
                                    <label>Country / Region </label>
                                    <select
                                        {...register("country", { required: true })}
                                        className="w-full py-2 px-4 border flex items-center outline-none hover:border-[#262626] duration-300">
                                        <option>Select a country/region </option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="india">India</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="japan">Japan</option>
                                        <option value="london">London</option>
                                        <option value="israel">Israel</option>
                                        <option value="palestine">Palestine</option>
                                        <option value="dubai">Dubai</option>
                                        <option value="australia">Australia</option>
                                        <option value="iraq">Iraq</option>
                                    </select>
                                </div>
                                <div className="">
                                    {errors.country && <span className='text-[red] py-1'>Country  is required</span>}
                                </div>

                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><AiFillDatabase></AiFillDatabase></p>
                                    <input
                                        {...register("state", { required: true })}
                                        className='outline-none w-full px-2' type="text" placeholder='Your county / state / province' />
                                </div>
                                <div className="">
                                    {errors.state && <span className='text-[red] py-1'>State  is required</span>}
                                </div>

                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><AiFillUnlock></AiFillUnlock><sup className='text-[#F29500]'>*</sup></p>
                                    <input
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                        })}
                                        className='outline-none w-full px-2' type="password" placeholder='password' />
                                </div>
                                <div className="">
                                    {errors.password?.type === 'required' && <span className='text-[red] py-1'>password reuired</span>}
                                    {errors.password?.type === 'minLength' && <span className='text-[red] py-1'>password must be 6 characters</span>}
                                    {errors.password?.type === 'maxLength' && <span className='text-[red] py-1'>password must be less 20 characters</span>}
                                </div>

                                <div className='w-full py-2 px-4 border flex items-center hover:border-[#262626] duration-300'>
                                    <p className='flex items-center text-xl'><AiFillUnlock></AiFillUnlock><sup className='text-[#F29500]'>*</sup></p>
                                    <input
                                        {...register("confirmPassword", { required: true })}
                                        className='outline-none w-full px-2' type="password" placeholder='Confirm password' />
                                </div>

                                <div className="py-4 space-y-2">
                                    <div className="flex items-center space-x-2 hover:border-[#262626] duration-300">
                                        <input type="checkbox" name="" id="" />
                                        <p className="text-sm text-[#5b5b5b]">If you do not want to receive resources and offers from us, please tick the box.</p>
                                    </div>

                                    <div className="flex items-center space-x-2 hover:border-[#262626] duration-300">
                                        <input type="checkbox" name="" id="" />
                                        <p className="text-sm text-[#5b5b5b]">I agree to Terms & Conditions *</p>
                                    </div>
                                </div>

                                <div className="w-[20%] h-[20%]">
                                    <ReCAPTCHA
                                        sitekey="6LeO0cwoAAAAAHdHY3vq8ZlqUxWfMGzGp8x_F0t-"
                                        onChange={onChange}
                                    />,
                                </div>

                                <div>
                                    <input className='py-3 px-6 bg-[#10147E] text-white font-medium rounded hover:bg-[#006DB4] duration-300 cursor-pointer' type="submit" value="Register" />
                                </div>


                            </form>
                            <div className='flex flex-col items-center justify-center'>
                            <p className='text-xl font-medium py-2 text-[#262626] title-text'>Register  with</p>
                            <p onClick={handleGoogle} className='text-3xl px-2 py-2 border rounded-full bg-[#10147E] text-white hover:bg-[#006DB4] duration-300 cursor-pointer'><BiLogoGooglePlus></BiLogoGooglePlus></p>
                        </div>
                        </div>


                    </div>

                    <div className="space-y-2">
                        <p className="pb-4 text-[#525252]">
                            Register a free Taylor & Francis Online account today to boost your research and gain these benefits:
                        </p>

                        <div className="flex space-x-2">
                            <p className="text-2xl"><HiMail></HiMail></p>
                            <p className="text-[#525252]">
                                <span className="text-base font-semibold text-[#262626]">Choose new content alerts</span> to be informed about new research of interest to you
                            </p>
                        </div>

                        <div className="flex space-x-2">
                            <p className="text-2xl"><HiMail></HiMail></p>
                            <p className="text-[#525252]">
                                <span className="text-base font-semibold text-[#262626]">Easy remote access</span> to your institution's subscriptions on any device, from any location
                            </p>
                        </div>

                        <div className="flex space-x-2">
                            <p className="text-2xl"><HiMail></HiMail></p>
                            <p className="text-[#525252]">
                                <span className="text-base font-semibold text-[#262626]">Save your searches</span> and schedule alerts to send you results when new matches are found
                            </p>
                        </div>

                        <div className="flex space-x-2">
                            <p className="text-2xl"><HiMail></HiMail></p>
                            <p className="text-[#525252]">
                                <span className="text-base font-semibold text-[#262626]">Download your search results</span> and save as a .csv file to support your research
                            </p>
                        </div>

                        <div className="py-2">
                            <h2 className=" title-text lg:text-2xl font-semibold">Institutional accounts</h2>
                            <p className="py-3 text-[#525252]">
                                If you are a librarian wishing to create an institutional account please contact support@tandfonline.com.
                            </p>
                            <p className="text-[#525252]">
                                Add the domain @tandfonline.com to your safe senders list to ensure you don’t miss confirmation and other important service emails.
                            </p>
                        </div>

                        <div>
                            <h2 className=" title-text lg:text-2xl font-semibold">Restore content access for purchases made as a guest</h2>
                            <p className="py-4 text-[#525252]">Restore content access</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingUp;