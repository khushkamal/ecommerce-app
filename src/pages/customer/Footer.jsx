import React from 'react'

const Footer = () => {
  return (

      <footer className="bg-[#2b0f0f] text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">SHOP</h2>
          <p className="text-sm italic text-gray-300 mb-4">
            HUB
          </p>

          <div className="flex items-start gap-2 text-sm mb-2">
          <i class="fa-solid fa-location-dot"></i>
            <p>
                123, Market Street, City Name, Country
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
           <i class="fa-solid fa-phone"></i>
            <span>xxxxxxxxxx</span>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">POLICIES</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Term & Condition</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Sign in</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Track your order</li>
            <li className="hover:text-white cursor-pointer">
              Why ShopHub
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white"
            >
              <i class="fa-brands fa-instagram"></i>
              
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-white"
            >
              <i class="fa-brands fa-whatsapp"></i>
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        Copyright © 2025 ShopHub
      </div>
    </footer>
  );
};
export default Footer