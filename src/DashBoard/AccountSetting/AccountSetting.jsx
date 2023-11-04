
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const AccountSetting = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>
            <div className="text-white bg-[#10147E] py-3 px-8 flex items-center text-sm space-x-2 cursor-pointer">
                <Link to='/dashboard'>
                    <p className="hover:text-[#a43838] duration-300">Admin Home</p>
                </Link>
                <p>/</p>
                <p>Account Setting</p>
            </div>
            <div className="py-12 lg:px-20 md:px-16 sm:px-12 px-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold py-2  title-text">Update Your Information</h2>
                    <p className="text-[#676666]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo est laudantium? <br></br>Est vero vitae sapiente! Ea, unde suscipit! Ab vel incidunt soluta? Ad, fugiat.
                    </p>
                </div>

                <div className="lg:px-40">
                    <div className="border my-6">
                        <h2 className="bg-[#10147E] text-white text-center py-2 text-xl font-bold title-text">Add Information</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="px-12 py-8 space-y-3">
                            <div className="flex flex-col space-y-1">
                                  <label className="text-sm font-bold text-[#727272]">Change First Name</label>
                                  <input 
                                   {...register("firstName")}
                                  className="py-2 px-2 border outline-none" type="text" placeholder="Update Name.."/>
                            </div>

                            <div className="flex flex-col space-y-1">
                                  <label className="text-sm font-bold text-[#727272]">Change Last Name</label>
                                  <input 
                                  {...register("lastName")}
                                  className="py-2 px-2 border outline-none" type="text" placeholder="Update Last Name.."/>
                            </div>

                            <div className="flex flex-col space-y-1">
                                  <label className="text-sm font-bold text-[#727272]">Change Photo</label>
                                  <input 
                                  {...register("photoURL")}
                                  className="py-2 px-2 border outline-none" type="file" placeholder="Update Last Name.."/>
                            </div>

                            <div>
                                 <button className="py-3 px-4 bg-[#10147E] hover:bg-[#006DB4] duration-300 cursor-pointer text-white font-bold">Update Profile</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccountSetting;