import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddArticle = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://newspaper-server-site.vercel.app/articles',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId){
                reset()
                Swal.fire({
                    title: 'success!',
                    text: 'Your Items Added In Your Page',
                    icon: 'success',
                    confirmButtonText: 'Finised'
                })
            }
        })
        
    };
    return (
        <div>
            <div className="text-white bg-[#10147E] py-3 px-8 flex items-center text-sm space-x-2 cursor-pointer">
                <Link to='/dashboard'>
                    <p className="hover:text-[#a43838] duration-300">Admin Home</p>
                </Link>
                <p>/</p>
                <p>Add Article</p>
            </div>

            <div className="py-12 lg:px-20 md:px-16 sm:px-12 px-12">
                <div className="text-center">
                    <h2 className="text-2xl font-bold py-2  title-text">Add Your Article</h2>
                    <p className="text-[#676666]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quo est laudantium? <br></br>Est vero vitae sapiente! Ea, unde suscipit! Ab vel incidunt soluta? Ad, fugiat.
                    </p>
                </div>

                <div className="lg:px-40">
                    <div className="border my-6">
                        <h2 className="bg-[#10147E] text-white text-center py-2 text-xl font-bold title-text">Your Article</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="px-12 py-8 space-y-3">
                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Title</label>
                                <input 
                                 {...register("title")}
                                className="py-2 px-2 border outline-none" type="text" placeholder="Enter Title" />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Sub-Title</label>
                                <input 
                                 {...register("subTitle")}
                                className="py-2 px-2 border outline-none" type="text" placeholder="Enter sub-title" />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Short Description</label>
                                <input 
                                 {...register("description")}
                                className="py-2 px-2 border outline-none" type="text" placeholder="Enter Description 1-3 line.." />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Aims and scope</label>
                                <textarea 
                                 {...register("aims")}
                                className="py-2 px-2 border outline-none" cols="30" rows="2" placeholder="Write here.."></textarea>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Journal metrics </label>
                                <textarea 
                                 {...register("metrics")}
                                className="py-2 px-2 border outline-none" cols="30" rows="2" placeholder="Write here.."></textarea>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Editorial board  </label>
                                <textarea 
                                 {...register("editorial")}
                                className="py-2 px-2 border outline-none" cols="30" rows="2" placeholder="Write here.."></textarea>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Instructions for authors</label>
                                <textarea 
                                 {...register("authors")}
                                className="py-2 px-2 border outline-none" cols="30" rows="2" placeholder="Write here.."></textarea>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Change Photo</label>
                                <input 
                                {...register("photoURL")}
                                className="py-2 px-2 border outline-none" type="file" placeholder="Update Last Name.." />
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Select Category</label>
                                <select 
                                {...register("category")}
                                className="py-2 px-2 border outline-none">
                                      <option>Select category</option>
                                      <option value='latest'>Latest</option>
                                      <option value='article'>Article</option>
                                      <option value='trending'>Trending</option>
                                      
                                </select>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <label className="text-sm font-bold text-[#727272]">Select Sub-Category</label>
                                <select 
                                {...register("subCategory")}
                                className="py-2 px-2 border outline-none">
                                      

                                      <option value=''>Select sub-category </option>
                                      <option value='studies'>Studies </option>
                                      <option value='economics'>Economics</option>
                                      <option value='environment'>Environment </option>
                                      <option value='health'>Health </option>
                                      <option value='law'>Law </option>
                                      <option value='physical'>Physical </option>
                                      <option value='tourism'>Tourism </option>
                                      <option value='arts'>Arts </option>
                                      <option value='communication'>Communication </option>
                                      <option value='education'>Education </option>
                                      <option value='food'>Food </option>
                                      <option value='humanities'>Humanities </option>
                                      <option value='mathematics'>Mathematics </option>
                                      <option value='politics'>Politics </option>
                                      <option value='urban'>Urban </option>
                                      <option value='behavioral'>Behavioral</option>
                                      <option value='computer'>Computer </option>
                                      <option value='engineering'>Engineering</option>
                                      <option value='geography'>Geography </option>
                                      <option value='information'>Information</option>
                                      <option value='medicine'>Medicine</option>
                                      <option value='social'>Social </option>
                                      <option value='bioscience'>Bioscience </option>
                                      <option value='earth'>Earth</option>
                                      <option value='global'>Global </option>
                                      <option value='language'>Language</option>
                                      <option value='museum'>Museum</option>
                                      <option value='sports'>Sports</option>
                                     
                                      
                                      
                                </select>
                            </div>
                            
                           

                            <div>
                                <button className="py-3 px-4 bg-[#10147E] hover:bg-[#006DB4] duration-300 cursor-pointer text-white font-bold">Update Article</button>
                            </div>

                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddArticle;