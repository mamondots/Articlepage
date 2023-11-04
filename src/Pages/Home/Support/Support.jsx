import { useEffect, useState } from 'react';
import './Support.css'

import { AiFillLock } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Support = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('support.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
    }, [])
    return (
        <div className=''>
            <div className='py-2 lg:px-20 md:px-16 sm:px-12 px-12 bg-[#10147E]'>
                <h2 className='text-center py-8 text-2xl font-black text-white title-text'>Learn how we support you</h2>

                <div className='text-white grid lg:grid-cols-4 md:grid-cols-2 gap-6 pb-6'>
                    {
                        items.map((item) => <div key={item.id}>

                            <div className=' border-l px-6 border-[#ffffff38]'>
                                <p className='text-2xl font-medium py-2 title-text'>{item.head}</p>
                                <h2 className='title-text  font-medium'>{item.title}</h2>
                                <button className='py-2 px-6 border border-[#ffffff73] hover:bg-[#006DB4] hover:border-[#006DB4] duration-300 my-6'>{item.click}</button>
                            </div>

                        </div>)
                    }
                </div>
            </div>
            <div className='bg-[#F29500] px-12 py-4 text-lg cursor-pointer hover:border-[#F29500] hover:border duration-300 flex items-center justify-center hover:bg-[#10147E] hover:text-[#F29500] space-x-1 text-center'>
                <p><AiFillLock></AiFillLock></p>
                <h2>Taylor & Francis open access journals and publishing
                </h2>
                <p><MdKeyboardArrowRight></MdKeyboardArrowRight></p>
            </div>
        </div>
    );
};

export default Support;