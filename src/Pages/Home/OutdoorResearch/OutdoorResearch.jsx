import React, { useEffect, useState } from 'react';

import './OutdoorResearch.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { IoIosArrowForward } from 'react-icons/io';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-next" onClick={onClick}>
            <BsArrowLeftShort></BsArrowLeftShort>
        </div>
    )
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <BsArrowRightShort></BsArrowRightShort>
        </div>
    )
}

const OutdoorResearch = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('outdorresearch.json')
            .then(res => res.json()
                .then(data => {
                    setItems(data)
                }))
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll:1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className='py-2 pb-12 lg:px-20 md:px-16 sm:px-12 px-12'>
            <h2 className='text-center py-12 title-text text-3xl font-semibold'>OutDoor research</h2>

            <div>
                <Slider {...settings}>
                    {
                        items.map((item) => <div key={item.id}>
                            <div className='px-4 group cursor-pointer'>
                                <div className='overflow-hidden'>
                                    <img className='w-full group-hover:scale-110 duration-300' src={item.image} alt="" />
                                </div>
                                <div>
                                    <h2 className='flex items-center py-2 font-bold text-[#262626] group-hover:text-[#f75151] duration-300'>{item.title} <span><IoIosArrowForward></IoIosArrowForward></span></h2>
                                    <p className='text-[#262626c1]'>{item.description.slice(0,80)}...</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default OutdoorResearch;