import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

import footerLogo from "../assets/images/footer-icons/footer-setapp-logo.svg";
import heartIcon from "../assets/images/footer-icons/heart-icon.svg";

import facebookIcon from "../assets/images/footer-icons/facebook-icon.svg";
import twitterIcon from "../assets/images/footer-icons/twitter-icon.png";
import instagramIcon from "../assets/images/footer-icons/instagram-icon.png";
import youtubeIcon from "../assets/images/footer-icons/youtube-icon.png";

import usFlag from "../assets/images/footer-icons/us-flag.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-[#cfd3da] pt-8">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand & Newsletter */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-10">
            <img
              src={footerLogo}
              alt="Setapp"
              className="mb-6 w-[20px] h-[32px]"
            />{" "}
            <span>SETAPP</span>
          </div>

          <p className="text-sm flex items-center gap-1 mb-5">
            Updates from our team, written with love
            <img src={heartIcon} alt="heart" className="w-4 h-4" />
          </p>
          <div className="flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-sm bg-[#2a2f36] text-white placeholder-gray-400 outline-none rounded-l-md"
            />
            <button className="bg-white text-black px-4 rounded-r-md">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer">Home</li>
            <li className="text-white cursor-pointer">How it Works</li>
            <li className="cursor-pointer">All Apps</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Setapp for Teams</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Podcast</li>
            <li className="cursor-pointer">Download</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Education Discount</li>
            <li className="cursor-pointer">Family Plan</li>
            <li className="cursor-pointer">For Developers</li>
            <li className="cursor-pointer">Gift Cards</li>
            <li className="cursor-pointer">Redeem Card or Code</li>
            <li className="cursor-pointer">Setapp Reviews</li>
            <li className="cursor-pointer">Affiliate Program</li>
            <li className="cursor-pointer">Mac Developer Survey 2023</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer">Getting started with Setapp</li>
            <li className="cursor-pointer">Remote access to other Mac</li>
            <li className="cursor-pointer">Fix macOS Ventura problems</li>
            <li className="cursor-pointer">Best productivity apps</li>
            <li className="cursor-pointer">Best YouTube downloaders</li>
            <li className="cursor-pointer">Uninstall apps</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-[85%] mt-10 mx-auto">
        <div className="flex">
          <span className="bg-[#969799] text-white p-1 text-xs">DMCA</span>
          <span className="bg-[#404547] text-white p-1 text-xs">PROTECTED</span>
        </div>
        <div>
          {/* Language */}
          <div className="flex items-center gap-2">
            <img src={usFlag} alt="English" className="w-5 h-5" />
            <span>English</span> <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E5E5] mt-10 max-w-[1200px] mx-auto"></div>

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
        {/* Left */}
        <p className="text-center md:text-left">
          © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36Y1A,
          Ireland. Reg. 584165. VAT ID: IE3425001BH
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 hover:cursor-pointer">
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
          <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
          <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
          <img src={youtubeIcon} alt="YouTube" className="w-5 h-5" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-4 mb-2">
        <a
          href="#"
          className="text-[#969799] text-xs hover:text-gray-300 transition-colors"
        >
          Terms of Use
        </a>
        <a
          href="#"
          className="text-[#969799] text-xs hover:text-gray-300 transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
