import React,{useState} from 'react'
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    const[toggle, setToggle] = useState(false);

    const showSideMenu = ()=> {
        setToggle(true);
    }

    const hideSideMenu = ()=> {
        setToggle(false);
    }

    const links = [
        {
            icon: <TfiBag />,
            name: "Swiggy Corporate"
        },
        {
            icon: <CiSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sub: "New"
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: "Help"
        },
        {
            icon: <CiUser />,
            name: "Sign In"
        },
        {
            icon: <CiShoppingCart />,
            name: "Cart"
        },
    ]

  return (
    <>
        <div className='overlay w-full h-full fixed duration-500' onClick={hideSideMenu}
        style={
            {opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden"
            }
        }></div>
        <div className='w-[500px] bg-white h-full absolute duration-400ms'
        onClick={(e)=>{
            e.stopPropagation();
        }}
        style={
            {
                left: toggle ? '0%' : '-100%'
            }
        }>

        </div>
        <header className='p-[15px] shadow-xl'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <div className='w-[100px]'>
                    <img src="images/logo.png" className='w-[60px] rounded-xl' alt='' />
                </div>
                <div>
                    <span className='font-bold border-b-[3px] border-[#3e3e3e] text-[#3e3e3e] hover:border-[#fc6c19] hover:text-[#fc6c19]'>Other</span>
                    <RxCaretDown onClick={showSideMenu} className='inline text-[1.6rem] cursor-pointer text-[#fc6c19]'/>
                </div>
                <nav className='flex list-none gap-5 ml-auto text-[16px] font-semibold text-[#3e3e3e]'>
                    { 
                        links.map(
                            (link, index) => {
                                return <li key={index} className='cursor-pointer flex items-center gap-2 hover:text-[#fc6c19]'>
                                    {link.icon}
                                    {link.name}
                                    <sup className='text-[#fc6c19]'>{link.sub}</sup>
                                </li>
                            }
                        )
                    }
            </nav>
            </div>
        </header>
    </>
  )
}

export default Header