import React from 'react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'
const links=[
  { href:'https://discord.com', icon: <FaDiscord></FaDiscord> },
  { href:'https://github.com', icon: <FaGithub />},
  { href:'https://twitter.com', icon: <FaTwitter /> }
]
const Footer = () => {
  return (
    <footer className=' w-screen bg-violet-300 py-4 text-black '>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left '>&copy; Nova 2026. All rights reserved</p>
      
      <div className='flex justify-center gap-4 md:justify-start'>
        {links.map((link)=>(
          <a key={link.href} rel='noopener noreferrer' href={link.href} 
          className='text-black transition-colors duration-500 ease-in-out  hover:text-white'>{link.icon}</a>
        ))}
      </div>
      
      <a href="#privacy-policy"  className='text-center text-sm hover:underline md:text-right'>
        Privacy policy
      </a>
      </div>
    </footer>
  )
}

export default Footer