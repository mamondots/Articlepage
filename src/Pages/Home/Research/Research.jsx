import { useEffect, useState } from 'react';
import './Research.css'

import img from '../../../assets/image/download.png'
import { BsCheckLg } from 'react-icons/bs';

const Research = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('research.json')
            .then(res => res.json()
                .then(data => {
                    setItems(data)
                }))
    }, [])
    return (
        <div className='py-2 pb-16 lg:px-12px md:px-16 sm:px-12 px-12 bg-[#EEEEEE]'>
            <h2 className='text-center py-12 title-text text-3xl font-semibold'>Trending research</h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
                {
                    items.map((item) => <div key={item.id}>
                        <div className='bg-[#ffff] shadow-md hover:shadow-[#10147e7a] duration-300 px-6 py-6 border-t-8 rounded-md border-[#10147E] research-box cursor-pointer group relative overflow-hidden'>
                            <p className='text-[#626262]'>Article</p>
                            <h2 className='title-text text-lg group-hover:text-[#f15656] duration-300'>{item.title}</h2>
                            <div className='flex items-center flex-wrap py-6 gap-1'>
                                {
                                    item.writer.map((person, index) => <li key={person.index} className='list-none'>
                                        {person.name}
                                    </li>)
                                }
                            </div>
                            <p className='pb-2 text-sm'>Published online: {item.date}</p>
                            <div className='flex items-center justify-between'>
                                <img className='w-[20%] img-white' src={img} alt="" />
                                <p className='text-[12px] px-1  border text-[#2626266b]'>FREE ACCESS</p>
                            </div>
                            <div className='bottom-0 right-0 absolute bg-[#6CD775] px-3 py-2 side-icon'>
                                 <p><BsCheckLg></BsCheckLg></p>
                            </div>
                        </div>

                    </div>)

                }
            </div>
        </div>
    );
};

export default Research;