
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import userImg from '../../assets/image/userImg.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const DashBoardHead = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="bg-[#006DB4] py-12 lg:px-20 md:px-16 sm:px-12 px-12">
            <div className="flex flex-wrap gap-6">

                <div className='lg:w-1/6 border p-4 border-[#b4b4b46e]'>
                    {
                        user ? 
                        <>
                        <img  className='w-full' src={user.photoURL} alt="" />
                        </>
                        :
                        <>
                        <img className='' src={userImg} alt="" />
                        </>
                    }
                    <button className='py-2 w-full mt-4 inline-block px-4 border border-[#b4b4b46e] text-[#ffffffa4] hover:text-white duration-300 hover:bg-[#f53b51]'>Edit profile</button>
                </div>

                <div className='lg:w-3/4 border py-4 px-4 border-[#b4b4b46e]'>
                    <h2 className='text-2xl font-semibold title-text text-white'>Sydur Rahman</h2>
                    <p className='font-medium text-[#ffffffa4]'>Admin of this page</p>
                    <p className='py-2 text-[#ffffffa4]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illum, non totam, accusamus enim earum qui rerum esse assumenda maxime, molestias blanditiis provident vel harum!
                    </p>

                    <div className='flex items-center space-x-2 cursor-pointer'>
                        <p className='px-2 py-2 bg-[#ffffff11] text-[#ffffffa4] hover:bg-[#0866FF] duration-300 hover:text-white border border-[#b4b4b46e]'><FaFacebookF></FaFacebookF></p>
                        <p className='px-2 py-2 bg-[#ffffff11] text-[#ffffffa4] hover:bg-[#FE0363] hover:text-white border border-[#b4b4b46e] duration-300'><FaInstagram></FaInstagram></p>
                        <p className='px-2 py-2 bg-[#ffffff11] text-[#ffffffa4] hover:bg-[#1DA1F2] hover:text-white border border-[#b4b4b46e] duration-300'><FaTwitter></FaTwitter></p>
                        <p className='px-2 py-2 bg-[#ffffff11] text-[#ffffffa4] hover:bg-[#0A66C2] hover:text-white border border-[#b4b4b46e] duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                    </div>

                    <div className='space-x-2 lg:gap-0 gap-4 lg:space-y-0 space-y-2 py-2 mt-3'>
                        <button className='py-2 px-4 border border-[#b4b4b46e] text-[#ffffffa4] hover:text-white duration-300 hover:bg-[#FE0363]'>Remove admin</button>
                        <Link to='/'>
                            <button className='py-2 px-4 border border-[#b4b4b46e] text-[#ffffffa4] hover:text-white duration-300 hover:bg-[#f53b51]'>Back Home</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashBoardHead;