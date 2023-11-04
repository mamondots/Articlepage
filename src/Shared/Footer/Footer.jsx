
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' py-16 lg:px-20 md:px-16 sm:px-12 px-12 bg-[#10147E] text-white'>
            <div className='lg:flex lg:gap-12 gap-6'>

                  <div className='lg:w-2/3'>
                        <h2 className='text-xl font-bold'>News & Bangladesh</h2>
                        <div className='py-4 text-[#faf9f999]'>
                             <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nesciunt quisquam enim deleniti praesentium, nemo animi magnam, obcaecati ex cumque, mollitia eveniet incidunt laudantium unde?</p>

                             <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nostrum vitae accusantium! Voluptate aut pariatur, illo nulla eos, aliquam similique architecto vel minus aspernatur enim sed, maiores molestias. Tenetur, delectus.
                             </p>
                        </div>

                        <div>
                             <h2>Share with:</h2>
                             <div className='flex items-center space-x-2 py-4 cursor-pointer'>
                                  <p className='px-2 py-2 bg-[#F29500] text-[#10147E] hover:bg-[#0866FF] duration-300 hover:text-white '><FaFacebookF></FaFacebookF></p>
                                  <p className='px-2 py-2 bg-[#F29500] text-[#10147E] hover:bg-[#FE0363] hover:text-white duration-300'><FaInstagram></FaInstagram></p>
                                  <p className='px-2 py-2 bg-[#F29500] text-[#10147E] hover:bg-[#1DA1F2] hover:text-white duration-300'><FaTwitter></FaTwitter></p>
                                  <p className='px-2 py-2 bg-[#F29500] text-[#10147E] hover:bg-[#0A66C2] hover:text-white duration-300'><FaLinkedinIn></FaLinkedinIn></p>
                             </div>
                        </div>
                  </div>

                  <div className='lg:w-2/3'>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>

                              <div>
                                <h2 className='text-xl font-semibold'>Information for</h2>
                                <ul className='py-6 space-y-2 text-[#faf9f999]'>
                                    <li className='hover:text-white duration-300'><a href="" className='hover:border-b duration-300'>Authors</a></li>
                                    <li className='hover:text-white duration-300'><a href="">R&D professionals</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Editors</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Librarians</a></li>
                                </ul>
                              </div>
                              
                              <div>
                              <h2 className='text-xl font-semibold'>Open access</h2>
                                <ul className='py-6 space-y-2 text-[#faf9f999]'>
                                    <li className='hover:text-white duration-300'><a href="">Overview</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Open journals</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Dove Medical Press</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Open Select</a></li>
                                </ul>
                              </div>

                              <div>
                              <h2 className=' font-semibold'>Help and information</h2>
                                <ul className='py-6 space-y-2 text-[#faf9f999]'>
                                    <li className='hover:text-white duration-300'><a href="">Help and contact</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Newsroom</a></li>
                                    <li className='hover:text-white duration-300'><a href="">All journals</a></li>
                                    <li className='hover:text-white duration-300'><a href="">Books</a></li>
                                </ul>
                              </div>

                        </div>
                  </div>

            </div>
        </div>
    );
};

export default Footer;