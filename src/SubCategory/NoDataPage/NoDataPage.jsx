import { Link } from "react-router-dom";


const NoDataPage = () => {
    return (
        <div className="flex items-center justify-center flex-col py-60">
              <h2 className="text-6xl font-black title-text">CAN'T FIND ANY DATA </h2>
              <Link to='/'>
              <h2 className="px-4 py-4 bg-[#10147E] text-white text-xl mt-10 cursor-pointer hover:bg-[#006DB4] duration-300">BACK TO HOME</h2>
              </Link>
        </div>
    );
};

export default NoDataPage;