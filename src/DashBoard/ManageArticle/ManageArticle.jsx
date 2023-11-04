import { Link } from "react-router-dom";


const ManageArticle = () => {
    return (
        <div>
            <div className="text-white bg-[#10147E] py-3 px-8 flex items-center text-sm space-x-2 cursor-pointer">
                <Link to='/dashboard'>
                    <p className="hover:text-[#a43838] duration-300">Admin Home</p>
                </Link>
                <p>/</p>
                <p>Manage Article</p>
            </div>

            <div className="py-12 lg:px-20 md:px-16 sm:px-12 px-12">
            <div className="text-center">
                    <h2 className="text-2xl font-bold py-2  title-text">Manage Your Article</h2>
                    <p className="text-[#676666]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo est laudantium? <br></br>Est vero vitae sapiente! Ea, unde suscipit! Ab vel incidunt soluta? Ad, fugiat.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ManageArticle;