import React from 'react'
import {
    AcademicCapIcon,
    ArrowDownCircleIcon,
    BanknotesIcon
} from "@heroicons/react/24/outline";
function Footer() {
  return (
    <div className="w-full bg-blue-950 rounded-t-md h-[100%] flex lg:flex-1 flex-col p-10">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <img
          alt=""
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </a>
      <div className="text-white py-4">
        Making the world a better place through constructing elegant
        hierarchies.
      </div>
      <div className="flex">
        <AcademicCapIcon className="h-8 w-auto text-white pr-4" />
        <ArrowDownCircleIcon className="h-8 w-auto text-white pr-4" />
        <BanknotesIcon className="h-8 w-auto text-white" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 <--md:grid-cols-8--> text-white pt-8">
        <div>
          <h3 className="mb-2 font-bold">Solutions</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Submit ticket</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-bold">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-600 h-[1px] rounded-full my-8"></div>
      <div className='text-gray-400'>© 2024 Your Company, Inc. All rights reserved.</div>
    </div>
  );
}

export default Footer