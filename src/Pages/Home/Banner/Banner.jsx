import { Link } from 'react-router-dom';
import './Banner.css'
import { BiSearch } from 'react-icons/bi';

const Banner = () => {
    

    return (
        <div className='banner'>
            <div className='text-center py-2 bg-[#FACA75]  relative'>
                  <p className='short-link'><span className='font-semibold text-[#262626] hover:border-b border-[#262626]'><a href='https://taylorandfrancis.com/?_gl=1%2Abhn3mb%2A_ga%2AMTg2MDcxMzQ4OC4xNjk3Mjc2ODY2%2A_ga_0HYE8YG0M6%2AMTY5ODExNjQ5NS41LjEuMTY5ODExODgyMi4wLjAuMA..&_ga=2.114976263.1447525573.1698069024-1860713488.1697276866' target='_blank'>What's stopping AI regulation?</a></span>  Five key challenges for policymakers.</p>
            </div>

            <div className='py-12 lg:px-20 md:px-16 sm:px-12 px-12 z-10 relative'>
                 <h2 className='text-center text-4xl font-bold banner-title text-[#262626]'>Search peer-reviewed journals and articles</h2>
                 <div className='flex items-center justify-center py-8'>
                      <form className='flex items-center justify-center'>
                            <input className='w-100% lg:w-[100vh] md:w-[80vh] sm:w-[60vh] py-4 px-4 outline-none bg-[#fff] rounded shadow-md border text-lg' type="text" placeholder='Enter title,keywords etc' />
                            <button className='px-5 py-5 bg-[#10147E] text-white text-xl rounded mx-2  inline-block hover:bg-[#006DB4] duration-300' type='submit'><BiSearch className='font-black'></BiSearch></button>
                      </form>
                 </div>
                 <div className='flex items-center justify-center py-6 flex-col space-y-8'>
                      <p className='text-[#262626] text-2xl font-medium'>5,069,000+ articles</p>
                      <Link to='/all'>
                      <div className='flex items-center  space-x-2 bg-[#10147E] py-4 px-16 rounded text-white cursor-pointer hover:bg-[#006DB4] duration-300'>
                            <p><BiSearch></BiSearch></p>
                            <p>Find a journal</p>
                            
                      </div>
                      </Link>
                 </div>
            </div>
        </div>
    );
};

export default Banner;