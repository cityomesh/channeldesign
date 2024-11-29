import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
  return (
<footer className="bg-[#0a0f2c] text-white p-10">
      <div className="container md:w-full lg:w-[85%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        <div>
          <h5 className="font-bold text-lg mb-1 ">Quick Link</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="/technology" className="hover:tracking-widest">Technology</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">IPTV vs Cable TV</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="/smartconnect" className="hover:tracking-widest">Smart Connect</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">Smart Apps</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">Partners</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">About</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-1">Contact</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="bi bi-geo-alt mr-2"></i>
              Aditya Trade Center 7th Floor, 709 Ameerpet, Hyderabad - 500038
            </li>
            <li className="flex items-center">
              <i className="bi bi-telephone mr-2"></i>
              +91 9848028638
            </li>
            <li className="flex items-center">
              <i className="bi bi-envelope mr-2"></i>
              srrao@ulka.tv
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-1">Gallery</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <div className="grid grid-cols-3 gap-2">
            <img src="/dev.webp" alt="Gallery 1" className="w-16 h-16 border-white border-2" />
            <img src="/text.jpg" alt="Gallery 2" className="w-16 h-16 border-white border-2" />
            <img src="/import.jpg" alt="Gallery 3" className="w-16 h-16 border-white border-2" />
            <img src="/future1.jpg" alt="Gallery 4" className="w-16 h-16 border-white border-2" />
            <img src="/digital.png" alt="Gallery 5" className="w-16 h-16 border-white border-2" />
            <img src="/card.png" alt="Gallery 6" className="w-16 h-16 border-white border-2" />
          </div>
        </div>

        <div>
          <h5 className="font-bold text-lg mb-1">Newsletter</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <p className="mb-4">City Online Media Private Limited.</p>
          <form className="flex items-center border-b  bg-white relative border-gray-500 py-3">
            <input
              type="email"
              placeholder="Your email"
              className=" focus:outline-none text-black placeholder-gray-400 px-2 flex-grow"
            />
            <button
              type="submit"
              className="bg-[#0a0f3e] text-white absolute right-2 px-4 py-2 ml-2 "
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
      <hr className="mt-12 lg:w-[86%] text-gray-400 border-slate-500 mx-auto" ></hr>
        <div className="container mx-auto px-4 text-center mt-6">
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com" className="text-2xl"><FaLinkedin /></a>
            <a href="https://www.facebook.com" className="text-2xl"><FaFacebook /></a>
            <a href="https://www.instagram.com" className="text-2xl"><FaInstagram /></a>
            <a href="https://www.twitter.com" className="text-2xl"><FaTwitter /></a>
          </div>
          <p className="mt-2">© 2024 City Online Media Private Limited.</p>
        </div>
    </footer>
  );
}

export default Footer;
