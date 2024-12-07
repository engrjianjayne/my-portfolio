import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import {FaMailBulk} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';

const Contact = () => {
  return (
    
    <div className='px-6 max-w-[90%] mx-auto glass grid md:grid-cols-2 place-items-center' id="contact">
 
        <ul className='my-auto pr-6'>
          <li className='flex'><FaMailBulk className='w-[60px] h-auto text-gray-300'/>
          <div className='m-5'>
            <h3 className='text-lg font-bold text-gray-200'>Contact</h3>
            <p className='text-gray-400'>Mobile: 09108127874</p>
            <p className='text-gray-400'>Email: cpe.jianjayne@gmail.com</p>
          </div>
          </li>


          <li className='flex'>
            <AiFillHome className='w-[60px] h-auto text-gray-300'/>
            <div className='m-5'>
              <h3 className='text-lg font-bold text-gray-200'>Address</h3>
              <h4 className='text-lg font-bold text-gray-200'>Current City</h4>
              <p className='text-gray-400'>Manila</p>
              <h4 className='text-lg font-bold text-gray-200'>Hometown</h4>
              <p className='text-gray-400'>Sitio Banginan San Pedro Tiaong, Quezon</p>
          </div>
          </li>
        </ul>


        <form action="https://getform.io/f/ayvvydxb" method="POST" className='max-w-6xl p-5 md:p-12' id="form">
          <h3 className='text-white'>Send an Email!</h3>
          <br/>
          <input 
              type="text"
              id="name"
              placeholder="Your Name ..."
              name='name'
              className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
          />
           <input 
              type="email"
              id="email"
              placeholder="Your Email ..."
              name='email'
              className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
          />
          <textarea 
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            className='mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4'
          />
          <button type="submit" className='w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#fff] vie-[#fff] to-[#3d6ca4]'>Send Message</button>

        </form>

      
    </div>
  )
}

export default Contact
