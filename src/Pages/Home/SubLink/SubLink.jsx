
import { Link } from 'react-router-dom';
import './SubLink.css'
import { BiSearch } from 'react-icons/bi';
const SubLink = () => {

    const navLink = [
        {
            id: 1, name: 'Area Studies', path: '/studies'
        },
        {
            id: 2, name: 'Arts', path: '/nodata'
        },
        {
            id: 3, name: 'Behavioral Sciences', path: '/nodata'
        },
        {
            id: 4, name: 'Bioscience', path: '/nodata'
        },
        {
            id: 4, name: 'Built Environment', path: '/nodata'
        },
        {
            id: 6, name: 'Communication Studies', path: '/nodata'
        },
        {
            id: 7, name: 'Computer Science', path: '/nodata'
        },
        {
            id: 8, name: 'Earth Sciences', path: '/nodata'
        },
        {
            id: 9, name: 'Economics, Finance, & Business', path: '/nodata'
        },
        {
            id: 10, name: 'Education', path: '/nodata'
        },
        {
            id: 11, name: 'Engineering & Technology', path: '/nodata'
        },
        {
            id: 12, name: 'Environment & Agriculture', path: '/nodata'
        },
        {
            id: 13, name: 'Environment and Sustainability', path: '/nodata'
        },
        {
            id: 14, name: 'Food Science & Technology', path: '/nodata'
        },
        {
            id: 15, name: 'Geography', path: '/nodata'
        },
        {
            id: 16, name: 'Global Development', path: '/nodata'
        },
        {
            id: 17, name: 'Health and Social Care', path: '/nodata'
        },
        {
            id: 18, name: 'Humanities', path: '/nodata'
        },
        {
            id: 19, name: 'Information Science', path: '/nodata'
        },
        {
            id: 20, name: 'Language & Literature', path: '/nodata'
        },
        {
            id: 21, name: 'Law', path: '/nodata'
        },
        {
            id: 22, name: 'Mathematics & Statistics', path: '/nodata'
        },
        {
            id: 23, name: 'Medicine, Dentistry, & Nursing', path: '/nodata'
        },
        {
            id: 24, name: 'Museum and Heritage Studies', path: '/nodata'
        },
        {
            id: 25, name: 'Physical Sciences', path: '/nodata'
        },
        {
            id: 26, name: 'Politics & International Relations', path: '/nodata'
        },
        {
            id: 27, name: 'Social Sciences', path: '/nodata'
        },
        {
            id: 28, name: 'Sports and Leisure', path: '/nodata'
        },
        {
            id: 29, name: 'Tourism, Hospitality and Events', path: '/nodata'
        },
        {
            id: 30, name: 'Urban Studies', path: '/nodata'
        },
    ]

    return (
        <div className=' py-12 lg:px-20 md:px-16 sm:px-12 px-12 sublink'>
            <div className='flex justify-center items-center flex-col space-y-4'>
                <h2 className='text-center text-2xl font-bold banner-title text-[#262626]'>Explore journals and articles by subject</h2>

                <p className='text-[#585858]'>Search and explore the millions of quality, peer-reviewed journal articles published under the News & Bangladesh, Routledge and Dove Medical Press imprints.</p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 font-medium  text-left py-12 gap-4'>
                {
                    navLink.map((item) => <Link to={item.path} key={item.id}>
                        <li className='list-none py-1 hover:text-[#f56a4e] duration-300'>
                            <a href=''>{item.name}</a>
                        </li>
                    </Link>)
                }
            </div>


            <div className='flex items-center justify-center flex-col'>
                <Link to='/all'>
                    <div className='flex items-center  space-x-2 bg-[#10147E] py-2 px-6 rounded text-white cursor-pointer hover:bg-[#006DB4] duration-300'>
                        <p><BiSearch></BiSearch></p>
                        <p> Journals A - Z</p>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default SubLink;