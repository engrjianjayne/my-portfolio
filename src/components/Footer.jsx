import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaLinkedin
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#ffffff]'>FRONT-END DEV.</h1>
        <p className='py-4'>I am a humble and dedicated learner, ready to adapt and master any programming language needed to contribute effectively. My focus is on growth and delivering meaningful results for your team.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <a href="https://www.facebook.com/jianjayneee/" className='z-10' target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className='text-white hover:text-blue-600' size={30} /></a>

        <a href="https://www.instagram.com/jianjayneee/" className='z-10' target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-white hover:text-black' size={30}/> </a>

        <a href="https://x.com/jianjayne" className='z-10' target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className='text-white hover:text-black' size={30}/> </a>

        <a href="https://www.tiktok.com/@jianjayne" className='z-10' target="_blank" rel="noopener noreferrer">
          <FaTiktok className='text-white hover:text-black' size={30}/></a>

        <a href="https://github.com/engrjianjayne" className='z-10' target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className='text-white hover:text-black'size={30}/> </a>
          
        <a href="https://www.linkedin.com/in/jian-jayne-mu%C3%B1oz-72417b289/" className='z-10' target="_blank" rel="noopener noreferrer">      
          <FaLinkedin className='text-white hover:text-blue-600' size={30} /></a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
      <h6 className='font-medium text-gray-400'>Solutions</h6>
      <ul>
        <li className='py-2 text-sm'>Analytics</li>
        <li className='py-2 text-sm'>Marketing</li>
        <li className='py-2 text-sm'>Commerce</li>
        <li className='py-2 text-sm'>Insights</li>
      </ul>
    </div>

    <div>
      <h6 className='font-medium text-gray-400'>Support</h6>
      <ul>
        <li className='py-2 text-sm'>Pricing</li>
        <li className='py-2 text-sm'>Documentation</li>
        <li className='py-2 text-sm'>Guides</li>
        <li className='py-2 text-sm'>API Status</li>
      </ul>
    </div>

    <div>
      <h6 className='font-medium text-gray-400'>Company</h6>
      <ul>
        <li className='py-2 text-sm'>About</li>
        <li className='py-2 text-sm'>Blog</li>
        <li className='py-2 text-sm'>Jobs</li>
        <li className='py-2 text-sm'>Press</li>
        <li className='py-2 text-sm'>Careers</li>
      </ul>
    </div>

    <div>
      <h6 className='font-medium text-gray-400'>Legal</h6>
      <ul>
        <li className='py-2 text-sm'>Claims</li>
        <li className='py-2 text-sm'>Policy</li>
        <li className='py-2 text-sm'>Terms</li>
      </ul>
    </div>
      </div>
    </div>
  )
}

export default Footer