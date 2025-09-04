import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between w-full px-8 border-t py-4">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img className="hidden md:block w-20" src={assets.logo} alt="logo" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="text-center text-xs md:text-sm text-gray-500">
          © 2025 Nextgen LMS. All Rights Reserved.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#" aria-label="Facebook">
          <img src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
