// icon import
import Logo from "../../../assets/Logo.png";
import instaLogo from "../../../assets/icons/Instagram.png";
import linkLogo from "../../../assets/icons/linkedin.png";
import tweetLogo from "../../../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600">
                <img src={Logo} alt="" />
              </div>

              <p className="mt-8 max-w-xs primary-Color">
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampde
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <img src={linkLogo} alt="" />
                </li>
                <li>
                  <img src={instaLogo} alt="" />
                </li>
                <li>
                  <img src={tweetLogo} alt="" />
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
              <div>
                <p className="font-bold text-xl primary-Color">Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Product FAQs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Company Support
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal   ">
                      Manage Account
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-xl primary-Color">Quick Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Blog Post
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Product Features
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Company Info
                    </a>
                  </li>
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Company Info
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold text-xl primary-Color">Communnity</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Become an affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Product FAQs
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Our Fourms
                    </a>
                  </li>

                  <li>
                    <a href="#" className="  text-base font-normal    ">
                      Product API
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-[#FED29C]" />

          <div className="flex justify-between mx-auto max-w-screen-xl px-4 py-8 sm:px-6  lg:px-8">
            <p className="text-sm secondary-Color">
              Copyright © 2023 All rights reserved by Eyeglass
            </p>
            <div className="text-sm secondary-Color flex gap-7">
              <p>Privacy Policy</p>
              <p>Terms of service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
