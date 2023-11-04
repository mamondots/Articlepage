import { Link } from "react-router-dom";

import { BiSearch, BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import './Studies.css'
import StudiesCard from "../StudiesCard/StudiesCard";
import { AiFillFilePdf } from "react-icons/ai";

const Studies = () => {
    // const [articles] = useArticle('')
    // const studies = articles.filter((journal) => journal.subCategory === 'Studies')

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('article.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    const studies = items.filter((item) => item.subCategory === 'Studies')
    const articless = studies.filter((articles) => articles.category === 'Latest')
    const journal = studies.filter((articles) => articles.category === 'Article')

    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }


    //first-line
    const [currentPage, setCurrentPage] = useState(1)
    //second line
    const [limit, setLimite] = useState(4)
    //11th line
    const [pageNumberlimit, setPageNumberlimit] = useState(3)
    //12th line
    const [maxPageNumberlimit, setMaxPageNumberlimit] = useState(3)
    //13th line
    const [minPageNumberlimit, setMinPageNumberlimit] = useState(0)

    //3rd line
    const pages = []
    //4th line
    for (let i = 1; i <= Math.ceil(articless.length / limit); i++) {
        pages.push(i)
    }


    //9th line
    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
    }

    //5th line just li // 10 th line not included if //14 th line use if
    const renderPageNumber = pages.map((number) => {
        if (number < maxPageNumberlimit + 1 && number > minPageNumberlimit) {
            return (
                <li key={number} id={number} onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            )
        }
        else {
            return null
        }

    })
    //6th line
    const indexOfLastItem = currentPage * limit;
    //7th line
    const indexOfFirstItem = indexOfLastItem - limit;
    //8th line
    const currentItems = articless.slice(indexOfFirstItem, indexOfLastItem);

    //17th line
    const handleNexBtn = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberlimit) {
            setMaxPageNumberlimit(maxPageNumberlimit + pageNumberlimit)
            setMinPageNumberlimit(minPageNumberlimit + pageNumberlimit)
        }
    }

    //18th line
    const handlePrevBtn = () => {
        setCurrentPage(currentPage - 1)

        if ((currentPage - 1) % pageNumberlimit == 0) {
            setMaxPageNumberlimit(maxPageNumberlimit - pageNumberlimit)
            setMinPageNumberlimit(minPageNumberlimit - pageNumberlimit)
        }
    }

    //19th line
    let pagesIncrementBtn = null;
    if (pages.length > maxPageNumberlimit) {
        pagesIncrementBtn = <li onClick={handleNexBtn}> ...</li>
    }

    //20th line
    let pagesDicrementBtn = null;
    if (minPageNumberlimit >= 1) {
        pagesDicrementBtn = <li onClick={handlePrevBtn}> ...</li>
    }


    return (
        <div>
            <div className="bg-[#10147E] px-20 text-white flex items-center space-x-2 py-2 text-sm font-medium">
                <Link to='/'>
                    <p className="hover:text-[#f45555] duration-300 cursor-pointer">Home</p>
                </Link>
                <p>/</p>
                <p>Area Studies</p>
            </div>

            <div className="bg-[#EEEEEE] py-8">
                <form className='flex items-center justify-center'>
                    <input className='w-100% lg:w-[100vh] md:w-[80vh] sm:w-[60vh] py-4 px-4 outline-none bg-[#fff] rounded shadow-md border text-lg' type="text" placeholder='Enter title,keywords etc' />
                    <button className='px-5 py-5 bg-[#10147E] text-white text-xl rounded mx-2  inline-block hover:bg-[#006DB4] duration-300' type='submit'><BiSearch className='font-black'></BiSearch></button>
                </form>
            </div>

            <div className="py-12 flex flex-wrap lg:flex-nowrap lg:space-x-4  gap-6 lg:px-20 md:px-16 sm:px-12 px-12">

                <div className="lg:w-1/3 w-full">
                    <h2 className=
                        "text-2xl font-bold text-[#333333] title-text border-b pb-4 border-[#a8a8a8]">
                        Filters
                    </h2>

                    <div>
                        <h2 className="text-lg font-bold py-3">Access Type</h2>

                        <div className="flex items-center space-x-2 py-2">
                            <input className="h-6 w-6 rounded-xl outline-none border" type="checkbox" name="" id="" />
                            <p className="text-[#6c6c6c]">Only show content I have full access to</p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input className="h-6 w-6 rounded-xl outline-none border" type="checkbox" name="" id="" />
                            <p className="text-[#6c6c6c]">Only show Open Access</p>
                        </div>

                    </div>

                    <div className="py-6 border-b pb-4 
                    ">
                        <h2 className="text-2xl font-bold text-[#333333] title-text">Selected filters</h2>
                        <button className="py-2 px-4 bg-[#266DB4] text-white rounded text-sm font-medium my-4">Area Studies</button>
                    </div>

                    <div className="space-y-3">
                        <div className="collapse collapse-arrow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base font-bold">
                                Article Type
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-1 font-medium text-[#4c4c4c]">

                                    <div className="flex items-center justify-between">
                                        <p>Article</p>
                                        <p>(120)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Other</p>
                                        <p>(420)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Book Review</p>
                                        <p>(220)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Review Article</p>
                                        <p>(650)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Editorial</p>
                                        <p>(710)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow  border-t">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base font-bold">
                                Subject
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-1 font-medium text-[#4c4c4c]">

                                    <div className="flex items-center justify-between">
                                        <p>Area Studies</p>
                                        <p>(520)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Politics & International Relations</p>
                                        <p>(720)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Humanities</p>
                                        <p>(420)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Social Sciences</p>
                                        <p>(750)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Language & Literature</p>
                                        <p>(110)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-t">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base font-bold">
                                Journal
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-1 font-medium text-[#4c4c4c]">

                                    <div className="flex items-center justify-between">
                                        <p>Europe-Asia Studies</p>
                                        <p>(220)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Journal of Palestine Studies</p>
                                        <p>(120)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Palestine Exploration Quarterly</p>
                                        <p>(520)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Bulletin of Spanish Studies</p>
                                        <p>(840)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Third World Quarterly</p>
                                        <p>(910)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow border-t">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-base font-bold">
                                Publication date
                            </div>
                            <div className="collapse-content">
                                <div className="space-y-1 font-medium text-[#4c4c4c]">

                                    <div className="flex items-center justify-between">
                                        <p>Last Year</p>
                                        <p>(620)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Last 6 Months</p>
                                        <p>(220)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Last 3 Months</p>
                                        <p>(720)</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p>Last Month</p>
                                        <p>(940)</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="lg:w-3/4">
                    <h2 className="text-4xl font-bold text-[#333333] title-text">Search Results</h2>
                    <div className="bg-[#EEEEEE] px-4 py-4 my-4">
                        <h2 className="text-xl font-bold pb-4 title-text text-[#333333]">Looking to submit?</h2>
                        <p className="py-2 text-[#565555]">
                            Enter your abstract into our AI powered <span className="font-bold text-[#333333]">Journal Suggester</span> to discover the ideal journal for your research article.
                        </p>
                        <Link to='/'>
                        <button className="bg-[#10147E] py-2 px-4 text-white font-medium rounded text-sm hover:bg-[#006DB4] duration-300">Go to Journal Suggester</button>
                        </Link>
                    </div>

                    <p className="text-[#545353] text-base py-4"><span className="font-bold text-[#262626]">Showing 1-10 of 273,212 results for search</span>: All Subjects: Area Studies</p>

                    <div className="space-x-2 flex">
                        <button className="py-2 flex items-center px-6 bg-[#6CD775] rounded font-medium text-[#444444] hover:bg-[#006DB4] hover:text-[#fff] duration-300"><span><BiSearchAlt></BiSearchAlt></span>Save this search</button>
                        <button className="py-2 px-6 flex items-center bg-[#6CD775] rounded font-medium text-[#444444] hover:bg-[#006DB4] duration-300 hover:text-[#fff]"><span><AiFillFilePdf></AiFillFilePdf></span>Export search results</button>
                    </div>

                    <div className="tob-all py-12">
                        <div className='flex items-center cursor-pointer'>
                            <button
                                onClick={() => toggleTab(1)}
                                className={toggle === 1 ? "tabs active-tabs" : "px-2 py-2 text-[#262626] bg-[#CCCCCC] tabs"}

                            >Articles  (273212)</button>

                            <button
                                onClick={() => toggleTab(2)}
                                className={toggle === 2 ? "tabs active-tabs" : "px-2 py-2 text-[#262626] bg-[#CCCCCC] tabs"}>Journals  (303)</button>
                        </div>

                        <div className="py-6 bg-[#EEEEEE]">

                            <div className={toggle === 1 ? "content active-content" : "content"}>
                                <div className="space-y-2 px-8">
                                    {
                                        currentItems.map((articles, index) => <StudiesCard key={articles.index} articles={articles}>

                                        </StudiesCard>)
                                    }
                                </div>

                                <div className='flex items-center justify-center  list-none py-8 pageNumder cursor-pointer'>
                               
                                    <li>
                                        <button onClick={handlePrevBtn} disabled={currentPage == pages[0] ? true : false}>Prev</button>
                                    </li>
                                    {pagesDicrementBtn}
                                    {renderPageNumber}
                                    {pagesIncrementBtn}
				
                                    <li>
                                        <button onClick={handleNexBtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</button>
                                    </li>
                                </div>
                            </div>

                            <div className={toggle === 2 ? "content active-content" : "content"}>
                                <div className="space-y-2 px-8">
                                    {
                                        journal.map((articles, index) => <StudiesCard key={articles.index} articles={articles}>

                                        </StudiesCard>)
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Studies;