import { useEffect, useState } from "react";
import logoPNG from "../../../assets/Logo.png";
import profilePNG from "../../../assets/profile.png";
import shopPNG from "../../../assets/shop.png";
const Navbar = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const storedCartItems =
        JSON.parse(localStorage.getItem("products")) || [];
      setCartItems(storedCartItems);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearInterval(interval);
  }, [setCartItems]);

  console.log(cartItems.length);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full z-20 top-0 start-0">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto md:py-[30px] md:px-[90px] p-5">
        <a className="flex items-center cursor-pointer ">
          <img src={logoPNG} className="md:h-[47px] md:w-[194px]" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap items-center"></span>
        </a>
        <div className="flex md:order-2 space-x-5 rtl:space-x-reverse items-center">
          <a href="#" className="w-[22px] h-[22px] relative">
            <img src={shopPNG} alt="" className="w-full h-full" />
            <p className="bg-[#FFE6AD] rounded-full text-xs absolute top-[-10px] left-3 z-10 ms-1 w-4 ps-1 font-bold primary-Color">
              {cartItems?.length}
            </p>
          </a>
          <a href="#" className="w-[22px] h-[22px]">
            <img src={profilePNG} className="w-full h-full" />
          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 leading-[30px] text[20px] border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white primary-Color font-[400]">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 primary-Color"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 primary-Color"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
