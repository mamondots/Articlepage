import { AiFillUnlock } from "react-icons/ai";
import { Link } from "react-router-dom";


const NewsCard = ({article}) => {
    const {title,subTitle,description,photoURL,_id} = article
    return (
        <div className="border py-3 lg:px-4 flex flex-wrap lg:flex-nowrap space-x-4">
            <div className="lg:gap-0 lg:w-auto w-full">
                <img className="w-full h-full" src={photoURL} alt="" />
            </div>

            <div>
                 <h2 className="text-xl  font-medium title-text text-[#10147E] pb-4">{title}</h2>
                 <p className="flex item-center space-x-2 text-[#10147E] pb-2"><span className="text-[#FFA500] text-xl"><AiFillUnlock></AiFillUnlock></span><span>{subTitle}</span></p>
                 <p className="text-[#262626bc] pb-4">{description}</p>
                 <Link to={`/newsdetails/${_id}`}>
                 <button className="px-4 py-2 text-white font-medium bg-[#10147E] hover:bg-[#006DB4] duration-300 cursor-pointer text-sm title-text">Read More</button>
                 </Link>
            </div>
        </div>
    );
};

export default NewsCard;