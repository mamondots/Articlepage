import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const StudiesCard = ({ articles }) => {
    const { title, subTitle, description, write, city, volum, date, category, aims } = articles
    const [toggle, setToggle] = useState(false)
    const handle = () => {
        setToggle(!toggle)
    }
    return (
        <div className="py-4 bg-[#fff] px-4">
            <div className="flex space-x-4  items-center">
                <div className="mt-[-10px]">
                    <input className="h-4 w-4 rounded-full border" type="checkbox" name="" id="" />
                </div>
                <div>
                    <h2 className="text-xl font-bold title-text text-[#10147E] pb-4">{title}</h2>
                </div>
            </div>
            <p className="flex item-center space-x-2 text-[#10147E] pb-2"><span className="text-[#FFA500] text-xl"><AiFillUnlock></AiFillUnlock></span><span>{subTitle}</span></p>
            <p className="text-lg font-medium pb-1">{write}</p>
            <div className="flex items-center space-x-2">

                <p>{city}</p>
                <p>Volume {volum}</p>
            </div>

            <div className="flex item-center space-x-2 text-[#656565]">
                <p>{category}</p>
                <p>-</p>
                <p>Published Online : {date}</p>
                <p>-</p>
                <p>Views: (0)</p>
            </div>

            <div className="flex items-center space-x-6 py-2 text-sm font-bold text-[#10147E]">
                <button onClick={handle} className="hover:text-[#ff5c5c] duration-300 flex items-center">Abstract <span><IoIosArrowDown></IoIosArrowDown></span></button>
                <Link to='/subcarddetails'>
                    <button className="hover:text-[#ff5c5c] flex items-center duration-300">Full Text
                    <span><IoIosArrowForward></IoIosArrowForward></span>
                    </button>
                </Link>
            </div>

            <div className="">
                {
                    toggle ?
                        <>
                            <p className="text-[#4c4c4c]">{aims}</p>
                        </>
                        :
                        <>

                        </>
                }

            </div>

        </div>
    );
};

export default StudiesCard;