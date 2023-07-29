import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20 bg-fixed'>
            <SectionTitle 
            subHeading="Check it out"
            heading="Featured item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 '>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2023</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis tempore natus. Commodi, architecto deleniti fugit consequatur labore exercitationem.</p>
                    <button className=" btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;