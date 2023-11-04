
import { useState } from 'react';
import './Informa.css'

import { BsFillCaretDownFill } from 'react-icons/bs';



const Informa = () => {
    const [isOpen,setIsOpen] = useState(false)

    const handleOpen = () =>{
        setIsOpen(!isOpen)
        console.log('hi')
    }

    return (
        <div className='bg-[#525A5C] py-2 lg:px-20 md:px-16 sm:px-12 px-12 informa absolute top-0 w-full z-10'>
           <div className={`duration-500 ${isOpen ? "duration-500":"hidden duration-500"}`}>
           <div className='grid lg:grid-cols-2 lg:gap-12 gap-6 text-white z-10'>
               <div>
                <p className='text-sm'>News and Bangladesh Group is part of the Academic Publishing Division of Informa PLC</p>
                <div className='py-4'>
                      <ul className='flex items-center flex-wrap lg:space-x-6 lg:gap-0 gap-2 text-sm font-medium'>
                        <li><a href="https://www.informa.com/" target='_blank'>Informa PLC</a></li>
                        <li><a href="https://www.informa.com/about-us/" target='_blank'>ABOUT US</a></li>
                        <li><a href="https://www.informa.com/investors/" target='_blank'>INVESTOR RELATIONS</a></li>
                        <li><a href="https://www.informa.com/talent/" target='_blank'>TALENT</a></li>
                      </ul>
                </div>
               </div>

               <div>
                 <p className='text-sm side-line'>
                 This site is operated by a business or businesses owned by Informa PLC and all copyright resides with them. Informa PLC’s registered office is 5 Howick Place, London SW1P 1WG. Registered in England and Wales. Number 3099067.
                 </p>
               </div>

           </div>
           </div>

           <div onClick={handleOpen} className='flex items-center justify-center  text-white space-x-1 cursor-pointer'>
                <h2 className='text-white font-bold text-xl'>Informa</h2>
                <p className='pt-1'><BsFillCaretDownFill></BsFillCaretDownFill></p>
           </div>
        </div>
    );
};

export default Informa;