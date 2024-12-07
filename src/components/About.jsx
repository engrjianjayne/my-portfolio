import React from 'react'
import frontenddev from '../assets/frontenddev.jpg'
import engr from '../assets/engr.png'
import fiperx from '../assets/fiperx.png'
import ipcr from '../assets/ipcr.png'
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiGit,
  DiGithubBadge,
} from 'react-icons/di'
import {
  BiLogoTailwindCss
} from 'react-icons/bi'
import { SiCplusplus, SiPython } from 'react-icons/si'

const About = () => {
  return (
    <div className='max-w-[100%] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>

      <div className='md:hidden bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
      <DiHtml5 className='text-orange-600' title='HTML5'/>
      <DiCss3 className='text-blue-600' title='CSS3'/>
      <DiSass className='text-pink-600' title='SASS'/>
      <BiLogoTailwindCss className='text-blue-600' title='TAILWIND CSS'/>
      <DiBootstrap className='text-purple-600' title='BOOTSTRAP'/>
      <DiJavascript1 className='text-yellow-600' title='JAVASCRIPT'/>
      <DiReact className='text-blue-600' title='REACT'/>
      <DiGit className='text-orange-600' title='GIT'/>
      <DiGithubBadge className='text-white' title='GITHUB'/>
      <SiCplusplus className='text-blue-600' title='C++'/>
      <SiPython className='text-blue-600' title='PYTHON'/>

      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={frontenddev} alt='frontenddev' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>
      
      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>FRONT-END JOURNEY</h2>
        <p className='text-gray-300 mb-4'>
        I am a Computer Engineer pursuing a career in Front-End development, driven by a tenacious spirit and eagerness to learn. With expertise in responsive design and modern technologies, I create user-friendly, adaptable web interfaces. My technical skills include:
        </p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' title='HTML5'/>
          <DiCss3 className='text-blue-600' title='CSS3'/>
          <DiSass className='text-pink-600' title='SASS'/>
          <BiLogoTailwindCss className='text-blue-600' title='TAILWIND CSS'/>
          <DiBootstrap className='text-purple-600' title='BOOTSTRAP'/>
          <DiJavascript1 className='text-yellow-600' title='JAVASCRIPT'/>
          <DiReact className='text-blue-600' title='REACT'/>
          <DiGit className='text-orange-600' title='GIT'/>
          <DiGithubBadge className='text-white' title='GITHUB'/>
          <SiCplusplus className='text-blue-600' title='C++'/>
          <SiPython className='text-blue-600' title='PYTHON'/>
        </div>
      </div>

      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>EDUCATION BACKGROUND</h2>
        <p className='text-gray-300 mb-4'>
        <strong>TERTIARY</strong> <br/>
        Pamantasan ng Lungsod ng San Pablo<br/>			 			         
        <em>Bachelor of Science in Computer Engineering, GPA: 1.60</em><br/>
        San Pablo City, Laguna<br/>			       
        August 27, 2020 – July 12, 2024<br/>

        <strong>SECONDARY</strong><br/>
        Mabini Colleges Incorporated<br/> 							             
        <em>Humanities and Social Sciences, With Honors</em><br/>
        Daet, Camarines Norte<br/>                                                                                      
        2018 – 2020
        </p>
        
      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={engr} alt='engr' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>
      
      
      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={fiperx} alt='project 2' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>
      
      
      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>ACHIEVEMENTS / RESPONSIBILITIES / ORGANIZATIONS</h2>
        <p className='text-gray-300 mb-4'>
        •	Student Edition, Institute of Computer Engineers of the Philippines, Inc. (A.Y. 2023 – 2024) <br/><br/>
        •	Thesis Leader, Top 6, Design Project 1 & 2 (An Arduino-Based Paper Maker Device Using Pseudo-Stem Fiber of Banana Tree for Barangay San Isidro, San Pablo, Laguna, July 2024)<br/><br/>
        •	Thesis Leader, Methods of Research 1 & 2 (The Challenges in Coconut Shell Waste Encountered by The Farmers in Barangay Bautista, San Pablo City of Laguna, Basis for Recycling Plan, May 2024)<br/><br/>
        •	Smart Cane Project (TouchGuidance: Enhancing Accessibility with An Arduino-Based Smart Cane Device for Visually Impaired in San Pablo City of Laguna, January 2024)
        </p>
      </div>


      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>PRE-PROFESSIONAL EXPERIENCE</h2>
        <p className='text-gray-300 mb-4'>
        <strong>Technical Support Intern – IT Department</strong><br/>                                                                   
        San Pablo City, Laguna<br/>
        Office of the Vice President for Administration, Planning and Finance<br/>             
        July 6, 2023 – September 4, 2023<br/><br/>

        <em>Summary of Internship</em><br/>
        Assisted in updating and re-encoding Individual Performance Commitment and Review (IPCR)
        forms for teaching and non-teaching staff across nine university departments. These forms
        track employee goals, commitments, and accomplishments per semester.
        </p>
      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={ipcr} alt='engr' className='rounded-lg md:max-w-[500px]' />
        </div>
      </div>

    </div>
  )
}

export default About
