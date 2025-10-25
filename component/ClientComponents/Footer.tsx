import React from "react";
import HerosectionWaitlist from "./HerosectionWaitlist";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-20 px-6 md:px-20 border-t border-white/10">
      {/* Top CTA Section */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Ready to Read? Enter your email to create or restart your membership.
        </h1>
        <HerosectionWaitlist />
      </div>

      {/* Middle Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm text-gray-400 mb-12">
        <div>
          <h3 className="text-white font-semibold mb-3">BookFlix</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Discover</h3>
          <ul className="space-y-2">
            <li>Trending Books</li>
            <li>Authors</li>
            <li>Categories</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Account</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Facebook className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
            <Instagram className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
            <Youtube className="w-5 h-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-500">BookFlix</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
