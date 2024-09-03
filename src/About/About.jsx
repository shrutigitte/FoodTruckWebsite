import React from 'react'
import AboutImg from './image.png'
const About = () => {
  return (
    <div className='flex my-16 bg-[#F0F1F7]'>
      <div className='w-[370px] flex lg:w-full h-[467px] lg:mx-32 '>
        <img src={AboutImg} className='hidden lg:block' alt="FoodImgAbout Section" />
        <div className='py-10 lg:w-[447px] lg:ml-[300px] px-10'>
            <h6 className='text-2xl text-[#0E2368] py-5 font-bold text-center'>About Us</h6>
          <p className='font-medium text-[#444957] px-4 text-center text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi pariatur   natus itaque molestiae repellat! Blanditiis sapiente sit magnam est ipsam nisi natus a esse excepturi, aut mollitia labore sint cum aperiam odio nam molestias unde atque, aliquid  pariatur aspernatur autem quidem qui blanditiis molestiae voluptatibus quaerat deserunt odio.
          </p>
        <button className='bg-red-600 text-white py-1 mt-5 rounded-3xl px-8 ml-24'>Read More!</button>
        </div>
      </div>
    </div>
  )
}

export default About
