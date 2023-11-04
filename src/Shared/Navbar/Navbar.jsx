import { Link } from "react-router-dom";
import './Navbar.css'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import userImg from '../../assets/image/userImg.jpg'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { user,logOut } = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() =>{ })
        .catch(err => console.log(err))
    }

    return (
        <div className='bg-[#006DB4] py-8 lg:px-20 md:px-16 sm:px-12 px-12 navbar text-white'>
            {/* for big device */}
            <div className="flex items-center justify-between pt-8 w-full">
                <div>
                    <h2 className="text-xl font-medium">
                        <Link to='/'>
                            News & Bangladesh
                        </Link>
                    </h2>
                </div>
                <div className="text xl font-medium space-x-3 navLink">
                    <ul className="lg:flex items-center space-x-6 hidden">
                        <Link to='/'>
                        <li><a href="">Home</a></li>
                        </Link>

                        <Link to='/all'>
                        <li><a href="">All Articles</a></li>
                        </Link>

                        <Link to='/journal'>
                        <li><a href="">Journal</a></li>
                        </Link>

                        <Link to='/justarticle'>
                        <li><a href="">Articles</a></li>
                        </Link>

                        <Link to='/treanding'>
                        <li><a href="">Trending</a></li>
                        </Link>

                        <Link>
                        <li><a href="">Blogs</a></li>
                        </Link>

                        <Link>
                        <li><a href="">Contact</a></li>
                        </Link>

                        <div className="pl-12">

                            {
                                user ?
                                    <>
                                        <div className="das">
                                            <div>
                                                {
                                                    user?.photoURL
                                                        ?
                                                        <>
                                                            <img className='rounded-full w-8 h-8' src={user.photoURL} alt="" />
                                                        </>
                                                        :
                                                        <>
                                                            <img className='rounded-full w-8 h-8' src={userImg} alt="" />
                                                        </>
                                                }
                                            </div>

                                            <div className='bg-[#D54800] text-white hover:bg-[#061E43] duration-300 cursor-pointer px-4 py-2 absolute right-10 z-50 mt-2 board rounded'>
                                                    <h2 onClick={handleLogOut} className='py-2 hover:text-[#ff00009d] duration-300'>Logout</h2>
                                                    <Link to='/dashboard'>
                                                        <h2 className='pb-1 hover:text-[#ff00009d] duration-300'>Account Setting</h2>
                                                    </Link>
                                                </div>

                                        </div>
                                    </>
                                    :
                                    <>
                                        <button className="border  border-[#bcbcbc] py-2 px-8 text-[#bcbcbc] hover:bg-[#fff] hover:text-[#262626] duration-300 hover:border-[#fff]">
                                            <Link to='/login'>
                                                Log in
                                            </Link>
                                        </button>
                                    </>
                            }

                        </div>
                    </ul>

                    <div onClick={() => setIsOpen(true)} className="lg:hidden text-2xl py-1 px-2 border">
                        <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
                    </div>

                </div>
            </div>

            {/* for small device */}

            <div className={`lg:hidden fixed top-0 bg-[#0A0C4C] w-full h-full z-50 p-5 duration-500 space-y-5 overflow-y-auto ${isOpen ? "left-0" : "left-[-100%]"
                }`}>
                <div className="py-8 lg:px-20 md:px-16 sm:px-12 px-12 w-full">
                    <div className="flex justify-between items-center">
                        <div className="text-xl font-medium">
                            <h2>News & Bangladesh</h2>
                        </div>

                        <div onClick={() => setIsOpen(false)} className="text-xl py-2 px-2 border">
                            <AiOutlineClose></AiOutlineClose>
                        </div>
                    </div>


                    <div className="text xl font-medium  navLink py-12">
                        <ul className="flex flex-col space-y-2">
                            <li><a href="">Home</a></li>
                            <li><a href="">All News</a></li>
                            <li><a href="">Journal</a></li>
                            <li><a href="">Articles</a></li>
                            <li><a href="">Trending</a></li>
                            <li><a href="">Blogs</a></li>
                            <li><a href="">Contact</a></li>

                            <div>
                                <button className="border  border-[#bcbcbc] py-2 px-8 text-[#bcbcbc] hover:bg-[#fff] hover:text-[#262626] duration-300 hover:border-[#fff]">
                                    <Link to='/login'>
                                        Log in
                                    </Link>
                                </button>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Navbar;