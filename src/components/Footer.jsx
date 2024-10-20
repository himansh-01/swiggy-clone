import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";

const company = [
    "About Us",
    "Swiggy Corporate",
    "Careers",
    "Team",
    "Swiggy One",
    "Swiggy Instamart",
    "Swiggy Dineout",
    "Swiggy Genie",
    "Minis"
];

const contact = [
    "Help & Support",
    "Partner with us",
    "Ride with us"
];

const legal = [
    "Terms & Conditions",
    "Cookie Policy",
    "Privacy Policy"
];

const available = [
    "Mumbai",
    "Delhi",
    "Gurugram",
    "Bengaluru",
    "Chennai",
    "Kolkata"
];

const life = [
    "Explore with Swiggy",
    "Swiggy News",
    "Snackables"
];

const Footer = () => {
  return (
    <>
        <div className='h-[100vh] bg-[#F0F0F5] mt-7'>
            <div className="flex gap-5 pb-5 ml-[10%] mr-[10%] border-b-[0.5px] border-[black]">
                <div className="mt-[3%]">
                    <img src='https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg' className=''/>
                    <p className='text-[#7b7b7b] font-semibold text-[12px] p-3'>© 2024 Swiggy Limited</p>
                </div>
                <div className="gap-5 pb-5 mt-[3%] ml-[7%]">
                    <h2 className='font-bold text-[18px]'>Company</h2>
                    {
                        company.map(
                            (com, index)=>{
                                return <p className='text-[#7b7b7b] hover:cursor-pointer font-semibold pt-2 pb-2'>{com}</p>
                            }
                        )
                    }
                </div>
                <div className="gap-5 pb-5 mt-[3%] ml-[7%]">
                    <h2 className='font-bold text-[18px]'>Contact us</h2>
                    {
                        contact.map(
                            (com, index)=>{
                                return <p className='text-[#7b7b7b] font-semibold hover:cursor-pointer pt-2 pb-2'>{com}</p>
                            }
                        )
                    }
                    <h2 className='font-bold text-[18px] mt-[90px]'>Legal</h2>
                    {
                        legal.map(
                            (com, index)=>{
                                return <p className='text-[#7b7b7b] hover:cursor-pointer font-semibold pt-2 pb-2'>{com}</p>
                            }
                        )
                    }
                </div>
                <div className="gap-5 pb-5 mt-[3%] ml-[4%]">
                    <h2 className='font-bold text-[18px]'>Available in:</h2>
                    {
                        available.map(
                            (com, index)=>{
                                return <p className='text-[#7b7b7b] font-semibold pt-2 pb-2 hover:cursor-pointer'>{com}</p>
                            }
                        )
                    }
                    <button className='border-[1px] rounded-[5px] p-[3px] border-[#7b7b7b] text-[#7b7b7b] text-[14px]'>
                        595 cities <RxCaretDown className='inline' />
                    </button>
                </div>
                <div className="gap-5 pb-5 mt-[3%] ml-[7%]">
                    <h2 className='font-bold text-[18px]'>Life at Swiggy</h2>
                    {
                        life.map(
                            (com, index)=>{
                                return <p className='text-[#7b7b7b] font-semibold hover:cursor-pointer pt-2 pb-2'>{com}</p>
                            }
                        )
                    }
                    <h2 className='font-bold text-[18px] mt-[90px]'>Legal</h2>
                    <div className='flex pt-5'>
                        <FaLinkedin className='w-[30px]' />
                        <FaInstagram className='w-[30px]'/>
                        <FaFacebookF className='w-[30px]' />
                        <FaPinterest className='w-[30px]' />
                        <FaTwitter  className='w-[30px]'/>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 p-5 ml-[10%] mr-[10%]'>
                    <p className='font-bold text-[#474646] text-[20px] pt-[20px]'>For better experience, download the Swiggy app now</p>
                    <img className='w-[200px] hover:scale-110 hover:cursor-pointer' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv' />
                    <img className='w-[200px] hover:scale-110 hover:cursor-pointer' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl' />
            </div>
        </div>
    </>
  )
}

export default Footer