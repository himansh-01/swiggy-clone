import React,{useState} from 'react'
import {FaArrowRight, FaArrowLeft} from "react-icons/fa6";

const Card = () => {

    const restaurantChains = [
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
            "offer": "Items at ₹179",
            "title": "Pizza Hut",
            "rating": 4.2,
            "minTime": 30,
            "maxTime": 40,
            "name": "Pizzas",
            "place": "New Jodhpur"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
            "offer": "₹50 OFF ABOVE ₹199",
            "title": "Janta Sweet Home",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Sweets,South Indian",
            "place": "Shastri Nagar"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
            "offer": "₹85 OFF ABOVE ₹149",
            "title": "Parihaar Bhojnalay",
            "rating": 4.3,
            "minTime": 35,
            "maxTime": 40,
            "name": "North India, Thalis",
            "place": "Sardarpura"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
            "offer": "₹70 OFF ABOVE ₹149",
            "title": "Kwality Walls Frozen",
            "rating": 4.5,
            "minTime": 25,
            "maxTime": 25,
            "name": "Desserts,Ice Cream",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d679c532ca07a6f3fd6d89d603861412",
            "offer": "₹1-5 OFF ABOVE ₹179",
            "title": "The Good Bowl",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n7wbtvlifwbw5y4a7rrv",
            "offer": "₹100 OFF ABOVE ₹499",
            "title": "NIC Ice Creams",
            "rating": 4.7,
            "minTime": 25,
            "maxTime": 30,
            "name": "Desserts,Ice Cream",
            "place": "Sardarpura"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
            "offer": "Items at ₹109",
            "title": "Dosh Center",
            "rating": 4.0,
            "minTime": 35,
            "maxTime": 40,
            "name": "South Indian",
            "place": "Chopsani Housing Board"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng",
            "offer": "₹125 OFF ABOVE ₹349",
            "title": "Lunch Box - Meals and Thalis",
            "rating": 4.3,
            "minTime": 30,
            "maxTime": 35,
            "name": "Biryani, North India",
            "place": "Shastri Nagar"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
            "offer": "₹70 OFF ABOVE ₹249",
            "title": "McDonald's",
            "rating": 4.4,
            "minTime": 30,
            "maxTime": 35,
            "name": "American",
            "place": "Rawaton Ka Bass"
        },
        {
            "image": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            "offer": "₹100 OFF ABOVE ₹449",
            "title": "Kajal's Cake",
            "rating": 4.5,
            "minTime": 35,
            "maxTime": 40,
            "name": "Cake",
            "place": "Chopsani Housing Board"
        }
    ]

    const [rest, setRest] = useState(0);
    const nextRest = ()=>{
        if(rest < -6) return false;
        setRest(rest-3);
    }
    const prevRest = ()=>{
        if(rest == 0) return false;
        setRest(rest+3);
    }

  return (
    <>
        <div className='max-w-[1000px] mx-auto'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Indore</div>
                <div className='flex'>
                    <div onClick={prevRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
                    bg-[#e2e2e7] rounded-full mx-2'><FaArrowLeft /></div>
                    <div onClick={nextRest} className='flex cursor-pointer justify-center items-center w-[30px] h-[30px] 
                    bg-[#e2e2e7] rounded-full mx-2'><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex overflow-hidden border-b-2 gap-5 pb-5'>
                    {
                        restaurantChains.map(
                            (cat, index) => {
                                return <div key={index} style={{ transform: `translateX(${rest*100}%)`}}  className='w-[280px] h-[220] object-cover shrink-0 cursor-pointer duration-500'>
                                <img src={cat.image} className='w-[280px] h-[180px]' alt=''/>
                            </div>
                            }
                        )
                    }
        </div>
        </div>
    </>
  )
}

export default Card