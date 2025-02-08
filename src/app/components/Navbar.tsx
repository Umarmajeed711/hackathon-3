"use client";
import Link from "next/link";
import "./navbar.css";
import { FaRegUser } from "react-icons/fa6";

import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
// import { FiAlignJustify } from "react-icons/fi";
// import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import { useRouter } from "next/navigation";
import { Image } from "react-bootstrap";

export const Navbar = () => {
  const router = useRouter();

  const [showSideBar, setShowSideBar] = useState(false);

  const showBar = () => {
    setShowSideBar(true);
  };

  const hideBar = () => {
    setShowSideBar(false);
  };

  const navigateTo = (url: string) => {
    router.push(url);
    hideBar();
  };

  return (
    <header>
      {/* navbar */}
      <nav className="nav">
        {/* logo */}
        <div>
          <p className="logo ps-2">Frnito</p>
        </div>

        {/* links & icons */}
        <div className="d-flex align-items-center gap-5 ">
          <ul className="nav-links gap-5">
            <li>
              <Link href="/" className="link active">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="link">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="link">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-icons gap-4 ">
            <p>
              <Link href="/MyAccount" className="link">
                <FaRegUser />
              </Link>
            </p>
            <p>
              <FiSearch />
            </p>
            <p>
              <Link href="/CheckOut" className="link">
                <FaRegHeart />
              </Link>
            </p>
            <p>
              <Link href="/Cart" className="link">
                <GrCart />
              </Link>
            </p>
          </div>
        </div>

        {/* button for side bar */}
        <p onClick={showBar} className="hideOnPc">
          <GiHamburgerMenu />
        </p>
      </nav>

      {/* navbar links for mobile */}
      {showSideBar ? (
        <div className="sideBar">
          <p onClick={hideBar} className="closeIcon">
            <IoMdClose />
          </p>
          <ul className="sideBarLinks">
            <li>
              <div
                onClick={() => {
                  navigateTo("/");
                }}
                className="sideLink"
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigateTo("/shop");
                }}
                className="sideLink"
              >
                Shop
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigateTo("/products");
                }}
                className="sideLink"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={() => {
                  navigateTo("/Contact");
                }}
                className="sideLink"
              >
                Contact
              </div>
            </li>
          </ul>
          <div className="d-flex flex-column align-items-center mt-5">
            <Image
              src="/ShopImages/mablelogo/Meubel House_Logos-05.png"
              alt=""
            />
            <p className="logo">Frnito</p>
          </div>
        </div>
      ) : null}
    </header>
  );
};
