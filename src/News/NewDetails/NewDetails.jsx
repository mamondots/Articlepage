
import { Link, useParams } from 'react-router-dom';

import img from '../../assets/image/showCoverImage (12).jpg'
import { AiFillUnlock } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FiEdit } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const NewDetails = () => {
    const { id } = useParams()
    const [singleInfo, setSingleInfo] = useState([])


    useEffect(() => {
        fetch(`https://newspaper-server-site.vercel.app/articles/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSingleInfo(data)
            })
    }, [])

    const {title,subTitle,description,photoURL,_id,metrics,aims,editorial,authors
    } = singleInfo
    return (
        <div>
            <div className='all-banner'>
                <div className='relative z-10 flex items-center space-x-3 font-semibold px-20 py-12'>
                    <Link to='/'>
                        <p className='hover:text-[#ea5656]  duration-300 cursor-pointer'>Home</p>
                    </Link>

                    <p>/</p>

                    <Link to='/all'>
                        <p className='hover:text-[#ea5656]  duration-300 cursor-pointer'>All Article</p>
                    </Link>

                    <p>/</p>

                    <p>{title}</p>
                </div>
            </div>

            <div className='py-8 lg:px-20 md:px-16 sm:px-12 px-12 bg-[#EEEEEE] border-b-8 border-[#10147E]'>
                <div className='flex flex-wrap lg:flex-nowrap lg:space-x-8 lg:gap-0 gap-3'>

                    <div>
                        <img src={photoURL} alt="" />
                    </div>

                    <div className=''>
                        <h2 className="text-2xl font-medium title-text text-[#10147E] pb-6">{title}</h2>
                        <p className="flex item-center space-x-2 text-[#10147E] pb-2"><span className="text-[#FFA500] text-xl"><AiFillUnlock></AiFillUnlock></span><span>{subTitle}</span></p>
                        <p className="text-[#262626bc] pb-4 lg:w-[80%]">{description} </p>

                        <div className='flex space-x-2 w-full'>
                            <input className='border px-2 py-2 w-[60%]' type="text" placeholder='Enter keywords, authors,etc..' />

                            <select className='py-2 px-2 border'>
                                <option>This journal</option>
                                <option>Anywhere</option>
                            </select>


                            <button className='py-0 px-2 bg-[#006DB4] text-white text-xl hover:bg-[#10147E] duration-300'><BiSearch></BiSearch>
                            </button>


                        </div>
                    </div>

                </div>
                <p className='py-4 text-[#262626c3]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor maiores ratione sapiente alias id rem doloribus accusamus velit dolorem pariatur voluptate omnis, optio nulla?
                </p>
            </div>

            <div className='py-8 lg:px-20 md:px-16 sm:px-12 px-12'>
                <div className='border px-4 py-6 lg:w-[80%] w-full flex items-center justify-between space-x-4'>
                    <h2 className='text-[#4e4d4d]'><span className='font-bold'>Ready to submit?</span> Start a new submission or continue a submission in progress</h2>

                    <Link to='/dashboard/addarticle'>
                        <h2 className='flex items-center text-[#030303] font-medium bg-[#6CD775] py-2 px-4 hover:bg-[#026CB6] hover:text-white duration-300 cursor-pointer'>Go to submission site <span className='px-1'><FiEdit></FiEdit></span></h2>
                    </Link>
                </div>

                <div className='py-12'>
                    <h2 className='text-3xl font-bold text-[#262626]  title-text'>Journal overview</h2>

                    <div className='py-4 lg:space-y-4 lg:gap-0 gap-6'>
                        <div className='border'>
                            <h2 className='bg-[#10147E] px-4 text-white font-medium py-4'>
                                {title}</h2>
                            <p className='px-4 py-8 text-[#7d7d7d]'>
                               {aims}
                            </p>
                        </div>

                        <div className='border'>
                            <h2 className='bg-[#10147E] px-4 text-white font-medium py-4'>Journal metrics </h2>
                            <p className='px-4 py-8 text-[#7d7d7d]'>
                           {metrics}
                            </p>
                        </div>


                        <div className='border'>
                            <h2 className='bg-[#10147E] px-4 text-white font-medium py-4'>Editorial board  </h2>
                            <p className='px-4 py-8 text-[#7d7d7d]'>
                            {editorial}
                            </p>
                        </div>


                        <div className='border'>
                            <h2 className='bg-[#10147E] px-4 text-white font-medium py-4'>Instructions for authors  </h2>
                            <p className='px-4 py-8 text-[#7d7d7d]'>
                            {authors}
                            </p>
                        </div>

                            <h2 className='text-3xl font-bold py-4 text-[#262626]  title-text'>Explore articles....</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewDetails;