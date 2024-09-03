import React from 'react'
import redside from './image.png'
import pizzaimg from './pizza.png'
import FoodTruck from './Food Truck.png'
const Header = () => {
  return (
    
    <div className='lg:flex '>
        {/* Food Truck Logo */}
        <img className='hidden lg:block lg:h-20 lg:w-28 lg:mt-8 lg:ml-24' src={FoodTruck} alt="Logo" />

      {/* Right side of the header */}
      <div className="relative lg:absolute w-[390px] h-[413.72px] lg:h-[839px] lg:w-[756px] lg:left-1/2">
        <img src={pizzaimg} alt="Background Image" className="relative lg:h-full lg:w-full" />
        <button className="text-sm absolute top-[18px] lg:left-3/4 left-[65%]  z-10 text-white border border-white py-2 px-4 rounded-2xl">
          Get in Touch
        </button>
        <img src={redside} alt="Foreground Image" className="absolute top-0 left-0 h-full w-full" />
      </div>

      {/* The Left side of the header */}
      <div className='lg:ml-24 lg:mb-56 lg:mt-56 ml-16 lg:w-[400px] w-[240px] mt-16 '>
        <div className=''>
        <p className='text-[#0E2368] lg:my-2 text-4xl lg:text-6xl font-bold px-2 text-center lg:text-left'>
          Discover the <span className='text-red-600'>Best</span> Food and Drinks
        </p>
        <p className='text-[#444957] text-sm my-6  text-center lg:text-left'>
          Naturally made Healthcare Products for the better care & support of your body.
        </p>
        <button className='bg-[#E23744] lg:ml-2 lg:mt-3 ml-10 text-white text-center lg:w-48 lg:h-16 w-32 h-10 hover:scale-110 rounded-3xl '>
          Explore Now!
        </button>
        </div>
      </div>
</div>

  )
}

export default Header

