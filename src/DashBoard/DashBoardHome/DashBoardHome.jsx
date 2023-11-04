import { Link } from "react-router-dom";


const DashBoardHome = () => {
    return (
        <div className='py-8 lg:px-20 md:px-16 sm:px-12 px-12'>
            <div>
                <h2 className='text-[#525A5C] text-2xl font-bold title-text'>Choose Next Step</h2>
                <p className='py-2 text-[#2626269f]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolores magnam blanditiis cupiditate ad eum beatae, <br></br>aliquid a doloribus, eligendi pariatur in earum quaerat rem!
                </p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 py-12'>

                <Link to='/dashboard/accountsetting'>
                    <div className='bg-[#F8F8F8] text-center text-[#333333] text-xl font-bold py-12 border-t-4 border-[#10147E] rounded-md hover:shadow-md cursor-pointer  duration-300 title-text'>
                        <h2 className='title-text'>Account Setting</h2>
                    </div>
                </Link>

                <Link to='/dashboard/addarticle'>
                    <div className='bg-[#F8F8F8] text-center text-[#333333] text-xl font-bold py-12 border-t-4 border-[#10147E] rounded-md hover:shadow-md cursor-pointer  duration-300 title-text'>
                        <h2 className='title-text'>Add Article</h2>
                    </div>
                </Link>

                <Link to='/dashboard/managearticle'>
                    <div className='bg-[#F8F8F8] text-center text-[#333333] text-xl font-bold py-12 border-t-4 border-[#10147E] rounded-md hover:shadow-md cursor-pointer  duration-300 title-text'>
                        <h2 className='title-text'>Manage Article</h2>
                    </div>
                </Link>

                <Link to='/dashboard/manageuser'>
                    <div className='bg-[#F8F8F8] text-center text-[#333333] text-xl font-bold py-12 border-t-4 border-[#10147E] rounded-md hover:shadow-md cursor-pointer  duration-300 title-text'>
                        <h2 className='title-text'>Manage User</h2>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default DashBoardHome;