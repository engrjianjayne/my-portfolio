import React from 'react'
import jianjayne from "../assets/jianjayne.jpg"
import {TypeAnimation} from 'react-type-animation'
import ShinyEffect from './ShinyEffect'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
  FaLinkedin
} from 'react-icons/fa'
import jianjaynecv from '../assets/jianjaynecv.pdf';
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-3'>
      <div className='max-w-[800px]'>
        <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>Hi, I am<br/>
          <span className="">JIAN JAYNE</span> <br/>
          <TypeAnimation
            sequence={[
              "Developer",
              1500,
              "Engineer",
              1500,
              "Fresh Graduate",
              1500,
              "Researcher",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold italic'
          />
        </p>
        <h2 className='text-gray-300'>with 6 months of experience</h2>
        
        <div className='flex flex-row gap-4 mb-4 md:mb-0 z-50'>
        <a href={jianjaynecv} download="CV - Jian Jayne Osea Muñoz.pdf" className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#fff] via-[#fff] to-[#3d6ca4] rounded-xl flex justify-center'>
          Download CV
        </a>
        
        <Link to="contact" smooth={true} offset={50} duration={500} className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl flex justify-center'>Hire Me</Link>

        </div>
        <div className='flex flex-wrap gap-4 md:w-[75%] my-6'>
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
    
      <div className='absolute inset-0 md:overflow-visible'>
      <div className='hidden md:block'>
        <ShinyEffect left={100} top={200} size={100}/>
      </div>
        <ShinyEffect left={-100} top={0} size={1200}/>
      </div>
      
   
      <img src={jianjayne} alt="Profile of Jian Jayne" className='w-[300px] md:w-[500px] profilepic-circle avatar' />
    </div>
  )
}

export default Hero
