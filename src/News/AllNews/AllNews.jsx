import { Link } from 'react-router-dom';
import './AllNews.css'

import { BiSearch } from 'react-icons/bi';
import { FaListUl,FaTh } from 'react-icons/fa';
import useArticle from '../../Hooks/useArticle';
import NewsCard from '../NewsCard/NewsCard';
import { useState } from 'react';

const AllNews = () => {

    const [articles] = useArticle('')

    const [visible,setVisible] = useState(10)

    const loadItem = () =>{
        setVisible((prevValue) => prevValue + 2)
    }
    
    return (
        <div>
            <div className='all-banner'>
                <div className='relative z-10 flex items-center space-x-3 font-semibold px-20 py-12'>
                    <Link to='/'>
                    <p className='hover:text-[#ea5656]  duration-300 cursor-pointer'>Home</p>
                    </Link>
                    <p>/</p>
                    <p>All Article</p>
                </div>
            </div>

            <div className='py-2 lg:px-20 md:px-16 sm:px-12 px-12'>
                 <div className='py-6'>
                      <h2 className='text-2xl font-bold  title-text text-[#262626]'>Read the Articles</h2>
                      <p className='text-[#5b5b5b] py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid itaque sapiente animi quibusdam, nostrum laborum voluptatibus. <br></br>Impedit neque nulla sunt at rerum velit laudantium eveniet!</p>
                 </div>

                 <div className='flex flex-wrap gap-6'>

                       <div className='lg:w-3/4'>
                            <div className='flex items-center space-x-2'>

                                 <div className='border hover:bg-[#10147E] duration-300 hover:text-white cursor-pointer py-2 px-2'>
                                    <p className='text-xl'><FaListUl></FaListUl></p>
                                 </div>

                                 <div className='border hover:bg-[#10147E] duration-300 hover:text-white cursor-pointer py-2 px-2'>
                                 <p className='text-xl'><FaTh></FaTh></p>
                                 </div>

                                 <div className='w-full'>
                                      <form className='border px-2 py-2 w-full flex items-center justify-between relative'>
                                        <input className='outline-none w-full' type="text" placeholder='Search your article...' />
                                        <button className='bg-[#10147E] text-xl px-4 h-full absolute right-0 text-white hover:bg-[#006DB4] duration-300'><BiSearch></BiSearch></button>
                                      </form>
                                 </div>

                            </div>

                            <div className='py-6'>
                                 <p className='text-[#757575]'>Showing  results for search:</p>
                            </div>

                            <div className='space-y-3'>
                                  {
                                    articles.slice(0,visible).map((article) =><NewsCard key={article._id}
                                    article={article}
                                    >

                                    </NewsCard>)
                                  }
                                   <div className='py-8'>
                                   <button onClick={loadItem} className="px-4 py-2 border bg-[#10147E] hover:bg-[#006DB4] duration-300 text-white flex items-center">More item</button>
                                   </div>
                            </div>

                       </div>

                       <div className='lg:w-1/3'>

                       </div>

                 </div>
            </div>
        </div>
    );
};

export default AllNews;