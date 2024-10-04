import React from "react";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-2xl mx-auto text-white py-6">
        <div className="text-center">
          <h3 className="text-3xl mb-3">WatchList</h3>
          <p>"Your ultimate movie and TV show tracker"</p>
          <div className="flex justify-center my-6">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                className="w-7 md:w-8"
                alt="Google Play Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-4 md:mt-0">
            &copy; WatchList {new Date().getFullYear()}
          </p>
          <div className="order-1 md:order-2">
            <FooterLink href="about-us">About Us</FooterLink>
            <FooterLink href="#watch-list" addClass="border-l">
              Watch List!
            </FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
}
