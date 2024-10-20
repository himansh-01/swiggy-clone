import React from 'react'
import { RxCaretDown } from "react-icons/rx";

function Bottom({arr1, arr2, arr3, x}) {

    const headBottom = [
        "Explore localities in and around Indore",
        "What's Indore eating! People ordering in Indore",
        "Restaurant Chains in Indore"
    ];

  return (
    <>
        <div className='max-w-[1000px] mx-auto'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[22px] font-bold'>{headBottom[x]}</div>
            </div>
            <div className='flex overflow-hidden'>
                {
                  arr1.map(
                    (elem, index) => {
                        return <>
                            <button className='border-[1px] w-[250px] h-[60px] rounded-[5px] p-[3px] m-[5px] border-[#7b7b7b] text-[#565656] text-[18px]'>
                                {elem}
                            </button>
                        </>
                    }
                  )
                }
            </div>
            <div className='flex overflow-hidden'>
                {
                  arr2.map(
                    (elem, index) => {
                        return <>
                            <button className='border-[1px]  h-[60px]  w-[250px] rounded-[5px] p-[3px] m-[5px] border-[#7b7b7b] text-[#565656] text-[18px]'>
                                {elem}
                            </button>
                        </>
                    }
                  )
                }
            </div>
            <div className='flex overflow-hidden'>
                {
                  arr3.map(
                    (elem, index) => {
                        return <>
                            <button className='border-[1px]  h-[60px]  w-[250px] rounded-[5px] p-[3px] m-[5px] border-[#7b7b7b] text-[#565656] text-[18px]'>
                                {elem}
                            </button>
                        </>
                    }
                  )
                }
                <button className='border-[1px]  h-[60px]  w-[250px] rounded-[5px] p-[3px] m-[5px] border-[#7b7b7b] text-[#565656] text-[18px]'>
                    show more <RxCaretDown className='inline' />
                </button>
            </div>
        </div>
    </>
  )
}

export default Bottom