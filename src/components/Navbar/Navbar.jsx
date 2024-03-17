import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = ({ Carter, userName }) => {
  const [show, setShow] = useState(false);
  const toogleChange = () => {
    show === false ? setShow(true) : setShow(false);
  };
  // const toogleClose =()=>{
  //   setShow(false)
  // }

  return (
    <>
      <div>
        <header className=" max-sm bg-white border-b border-gray-200 relative py-2">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div>
              <Link to="/">
                <h3 className="font-bold md:text-3xl  lg:4xl  text-2xl">
                  Khaiju<span className="text-[red]">Shop</span>
                </h3>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center  md:text-sm lg:text-xl  justify-center font-semibold">
                <Link to="/">
                  <li className="mr-7 hover:text-gray-900 cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to="/allproducts">
                  <li className="mr-7 hover:text-gray-900 cursor-pointer">
                    All products
                  </li>
                </Link>
                <Link to="/aboutus">
                  <li className="mr-7 hover:text-gray-900 cursor-pointer">About Us
                  </li>
                </Link>
                <Link to="/contact">
                <li className="mr-7 hover:text-gray-900 cursor-pointer">
                  Contact 
                </li>
                </Link>
            
              </ul>
            </div>
            {show ? (
              <div>
                <ul className="flex flex-col gap-10 text-2xl absolute top-[88px] left-0  h-screen w-full text-[white] z-10 bg-[red] text-lg justify-center items-center font-semibold">
                  <Link to="/">
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      Home
                    </li>
                  </Link>
                  <Link to="/allproducts">
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                      All products
                    </li>
                    </Link>
                    <Link to="/aboutus">
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                    About Us
                  </li>
                    </Link>
                    <Link to="/contact">
                    <li className="mt-5 hover:text-gray-900 cursor-pointer">
                   Contact 
                  </li>
                    </Link>

                </ul>
                <button
                  onClick={toogleChange}
                  className="absolute top-[75px] z-10 right-0 text-white py-6 px-4 cursor-pointer"
                >
                  <RxCross2 size={30} />
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex justify-center items-center gap-3">
              <Link to="/login">
                <button className="bg-red-500 hover:bg-blue-500 text-white font-bold py-2 px-4 lg:py-3 lg:px-6 text-sm md:text-base rounded-lg shadow-lg hover:text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  Log In
                </button>
              </Link>

              <Link to="/cart">
                <button className="ml-4">
                  <span className="bg-red-500 rounded-full w-3 h-3 flex items-center justify-center absolute z-10 ">
                    {Carter.length}
                  </span>
                  <FaCartArrowDown className="relative " size={25} />
                </button>{" "}
              </Link>

              {show ? (
                " "
              ) : (
                <button onClick={toogleChange} className="block md:hidden">
                  <GiHamburgerMenu size={25} />
                </button>
              )}
              <span className="text-xs md:text-sm m-auto absolute z-10 right-[25px] hidden sm:block top-[40px] text-center">
                {userName}
              </span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
