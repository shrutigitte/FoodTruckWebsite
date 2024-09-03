import React from 'react'
import Logo from './Food Truck.png'
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=''>
<footer class="mt-auto bg-gray-100 w-full ">
  <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        <a href="#"><img src={Logo} alt="Foodtruck" /></a>
      </div>
      <div class="col-span-1">
        <h4 class="font-semibold text-gray-500">Contact Us</h4>

        <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105 " href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam possimus corrupti, rerum  doloribus deleni</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105  " href="mailto:example@gmail.com">example@gmail.com</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105  " href="tel:+1234567890">1234567890</a></p>
        </div>
      </div>

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-500">More</h4>

        <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105" href="#">About us</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105" href="#">Blog</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105" href="#">Careers</a> <span class="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">We're hiring</span></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 hover:scale-105" href="#">Customers</a></p>
        </div>
      </div>


      <div class="col-span-2">
        <h4 class="font-semibold text-gray-700">Social Links</h4>

        <div className='flex gap-4 text-gray-600 my-5 text-2xl'>
        <FaInstagram className='text-4xl hover:scale-105 hover:text-gray-400' />
        <FaSquareXTwitter className='text-4xl hover:scale-105 hover:text-gray-400' />
        <FaFacebookF className='text-4xl hover:scale-105 hover:text-gray-400' />
        </div>

      </div>
      
    </div>
    

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-400">© 2024 Food Truck. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
