import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing icons from lucide-react
import { Link } from "react-router-dom";
import GooglePlay from "../assets/images/Google Play.png";
import Logo from "../../public/logo.png";
function Footer() {
  return (
    <div className="bg-gray-100 font-inter text-gray-800">
      <footer className="container mx-auto p-8 lg:p-12">
        {/* Top section: 24*7 HELP & SUPPORTS */}
        <div className="bg-[#005f73] text-white rounded-lg p-6 mb-10 flex flex-col md:flex-row items-center justify-around text-center md:text-left">
          <div className="border border-white rounded-full px-6 py-2 mb-4 md:mb-0">
            <span className="font-semibold text-lg">24*7 HELP & SUPPORTS</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <Phone size={24} className="mr-2 text-white" />
              <span>+91 9274466809</span>
            </div>
            <div className="flex items-center">
              <Mail size={24} className="mr-2 text-white" />
              <span>support@TheKushalEntertainment.co.in</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  mb-8">
          {/* Section 1: Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              {/* Provided SVG Logo */}
              <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
                {/* LOGO */}
                <a href="/" className="flex items-center">
                  <img src={Logo} className="h-14 w-auto" alt="Logo" />
                  <div className="hidden sm:flex flex-col items-center justify-center leading-[1.15]">
                    <p className="text-[11px] font-bold tracking-widest text-[#045b5f]">
                      THE KUSHAL
                    </p>
                    <p className="text-[11px] font-bold tracking-widest text-[#045b5f]">
                      MANGAL
                    </p>
                    <p className="text-[11px] font-bold tracking-widest text-[#045b5f]">
                      ENTERTAINMENT
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <p className="max-w-sm md:max-w-md lg:max-w-lg text-sm text-gray-600 leading-relaxed">
              A prominent Indian music distribution platform empowering artists
              globally.
            </p>
          </div>

          {/* Section 2: Get Started */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Music Distribution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Caller Tune Distribution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Video Distribution
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  YouTube Content ID
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Analytics and Reporting
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: About */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  FB & Insta Artist Profile Link
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Instagram Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  FB - Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#005f73]">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#005f73]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Pages */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/about" className="hover:text-[#005f73]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/terms&conditions" className="hover:text-[#005f73]">
                  Terms and Conditions Page
                </Link>
              </li>
              <li>
                <Link to="/Refund" className="hover:text-[#005f73]">
                  Refund Policy
                </Link>
              </li>
              {/* <li><Link to="/Api-Usage-Policy" className="hover:text-[#005f73]">Api Usage Policy</Link></li> */}
              <li>
                <Link to="/privacy" className="hover:text-[#005f73]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 5: Google Play and Join */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">GET IT ON</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.TheKushalEntertainment.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GooglePlay}
                  alt="Google Play"
                  className="mb-4 w-50 h-12"
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/the-black-turn/id6702028842"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa_WRP2WzpDAF6fFAZ2f4faUWU1ocWm27FY4OdG22jYnagGra32AwHMrj6kw4apI93p8&usqp=CAU"
                  alt="app store"
                  className="mb-4 w-50 h-12"
                />
              </a>
            </div>
            <h3 className="text-lg font-semibold mb-4">
              Join - The Kushal Entertainment
            </h3>
            <p className="text-sm text-gray-600 mb-4 lowercase">
              BLOCK-A-602 TITANIUM BUSINESS PARK, MAKARBA RAILWAY CROSSING ,
              B/H.DIVYA BHASKAR PRESS, AHMEDABAD - 380007.
            </p>
            <p className="text-sm text-gray-600 mb-4 lowercase">
              Registered address 704, 7th floor, palm Court, Mehrauli-Gurgaon
              Road, Sector 16, Gurugram, Haryana - 122007.
            </p>
            <Link
              to="/contact"
              className="bg-[#005f73] hover:bg-[#004d5f] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-95"
            >
              Join
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 mt-8 pt-4 border-t border-gray-300">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            © All rights reserved By The Kushal Entertainment | Parent
            Organization : The Kushal Entertainment
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/TheKushalEntertainmentindia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 64 64"
                className="h-9 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Icons" fill="none" fill-rule="evenodd">
                  <g
                    id="Social-Media-Collection"
                    fill="#3b5998"
                    transform="translate(-107 -87)"
                  >
                    <g id="Facebook" transform="translate(107 87)">
                      <path
                        id="Fill-183"
                        d="m40.31 21.312-3.012.002c-2.362 0-2.82 1.122-2.82 2.768v3.632h5.634l-.734 5.69h-4.9v14.596h-5.874v-14.596h-4.912v-5.69h4.912v-4.194c0-4.87 2.974-7.52 7.316-7.52 2.08 0 3.868.154 4.39.224zm-8.31-21.312c-17.672 0-32 14.326-32 32 0 17.672 14.328 32 32 32 17.674 0 32-14.328 32-32 0-17.674-14.326-32-32-32z"
                      />
                    </g>
                  </g>
                </g>
              </svg>{" "}
            </a>
            <a
              href="https://www.instagram.com/TheKushalEntertainment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 152 152"
                className="h-9 w-10"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <linearGradient
                  id="linear-gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="76"
                  x2="76"
                  y1="151.3"
                  y2="10.3"
                >
                  <stop offset="0" stop-color="#e09b3d" />
                  <stop offset=".24" stop-color="#c74c4d" />
                  <stop offset=".65" stop-color="#c21975" />
                  <stop offset="1" stop-color="#7024c4" />
                </linearGradient>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="_05.instagram" data-name="05.instagram">
                    <circle
                      id="background"
                      cx="76"
                      cy="76"
                      fill="url(#linear-gradient)"
                      r="76"
                    />
                    <g id="icon" fill="#fff">
                      <path d="m91.36 38h-30.72a22.67 22.67 0 0 0 -22.64 22.64v30.72a22.67 22.67 0 0 0 22.64 22.64h30.72a22.66 22.66 0 0 0 22.64-22.64v-30.72a22.67 22.67 0 0 0 -22.64-22.64zm15 53.36a15 15 0 0 1 -15 15h-30.72a15 15 0 0 1 -15-15v-30.72a15 15 0 0 1 15-15h30.72a15 15 0 0 1 15 15z" />
                      <path d="m76 56.35a19.66 19.66 0 1 0 19.65 19.65 19.67 19.67 0 0 0 -19.65-19.65zm0 31.65a12 12 0 1 1 12-12 12 12 0 0 1 -12 12z" />
                      <circle cx="95.77" cy="56.35" r="4.86" />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCXGCGYlnOGSELsTpkuJ5hBQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 152 152"
                className="h-9 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="_04.youtube" data-name="04.youtube">
                    <circle
                      id="background"
                      cx="76"
                      cy="76"
                      fill="#f20000"
                      r="76"
                    />
                    <path
                      id="icon"
                      d="m112.22 57.72c-1.52-4.72-6.55-7.51-11.22-8.16a236.82 236.82 0 0 0 -50.08 0c-4.63.65-9.66 3.48-11.18 8.16a94.94 94.94 0 0 0 0 36.57c1.56 4.71 6.59 7.51 11.26 8.16a238.16 238.16 0 0 0 50.08 0c4.63-.65 9.66-3.49 11.18-8.16a94.94 94.94 0 0 0 -.04-36.57zm-45.31 32.84v-29.12l23.71 14.56c-7.99 4.91-15.75 9.69-23.71 14.56z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://twitter.com/TheKushalEntertainmentIND"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 152 152"
                className="h-9 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="_02.twitter" data-name="02.twitter">
                    <circle
                      id="background"
                      cx="76"
                      cy="76"
                      fill="#00a6de"
                      r="76"
                    />
                    <path
                      id="icon"
                      d="m113.85 53a32.09 32.09 0 0 1 -6.51 7.15 2.78 2.78 0 0 0 -1 2.17v.25a45.58 45.58 0 0 1 -2.94 15.86 46.45 46.45 0 0 1 -8.65 14.5 42.73 42.73 0 0 1 -18.75 12.39 46.9 46.9 0 0 1 -14.74 2.29 45 45 0 0 1 -22.6-6.09 1.3 1.3 0 0 1 -.62-1.44 1.25 1.25 0 0 1 1.22-.94h1.9a30.24 30.24 0 0 0 16.94-5.14 16.42 16.42 0 0 1 -13-11.16.86.86 0 0 1 1-1.11 15.08 15.08 0 0 0 2.76.26h.35a16.43 16.43 0 0 1 -9.57-15.11.86.86 0 0 1 1.27-.75 14.44 14.44 0 0 0 3.74 1.45 16.42 16.42 0 0 1 -2.65-19.92.86.86 0 0 1 1.41-.12 42.93 42.93 0 0 0 29.51 15.78h.08a.62.62 0 0 0 .6-.67 17.36 17.36 0 0 1 .38-6 15.91 15.91 0 0 1 10.7-11.44 17.59 17.59 0 0 1 5.19-.8 16.36 16.36 0 0 1 10.84 4.09 2.12 2.12 0 0 0 1.41.54 2.15 2.15 0 0 0 .5-.07 30 30 0 0 0 8-3.31.85.85 0 0 1 1.25 1 16.23 16.23 0 0 1 -4.31 6.87 30.2 30.2 0 0 0 5.24-1.77.86.86 0 0 1 1.05 1.24z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>{" "}
            </a>
            <a
              href="https://in.pinterest.com/TheKushalEntertainment/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 176 176"
                className="h-9 w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="pinterest">
                    <rect
                      id="background"
                      fill="#d50012"
                      height="176"
                      rx="24"
                      width="176"
                    />
                    <path
                      id="icon"
                      d="m90.58 33c-30 0-45.16 21.52-45.16 39.47 0 10.87 4.11 20.53 12.94 24.14a2.17 2.17 0 0 0 3.16-1.61c.3-1.11 1-3.91 1.29-5.07.43-1.59.26-2.14-.91-3.52-2.54-3-4.17-6.89-4.17-12.39 0-16 12-30.27 31.11-30.27 17 0 26.29 10.37 26.29 24.22 0 18.22-8.06 33.59-20 33.59-6.61 0-11.56-5.47-10-12.17 1.9-8 5.58-16.64 5.58-22.42 0-5.17-2.78-9.49-8.52-9.49-6.76 0-12.19 7-12.19 16.36a24.3 24.3 0 0 0 2 10s-6.92 29.29-8.13 34.43c-2.41 10.21-.36 22.74-.19 24a.84.84 0 0 0 1.5.37c.63-.82 8.67-10.75 11.41-20.68.77-2.81 4.44-17.37 4.44-17.37 2.2 4.19 8.61 7.88 15.44 7.88 20.31 0 34.09-18.52 34.09-43.3.02-18.72-15.86-36.17-39.98-36.17z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg>{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
