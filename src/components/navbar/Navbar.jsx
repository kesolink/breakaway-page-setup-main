import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { useSelector } from "react-redux";
import spkLogo from "../../assets/spkLogo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { TiHomeOutline } from "react-icons/ti";
import { SiCompilerexplorer } from "react-icons/si";
import { CgCommunity } from "react-icons/cg";
import { FaAccessibleIcon, FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";


const Navbar = ({ toggleSidebar }) => {
  const [nav, setNav] = useState(true)
  const handleNav = () =>{
      setNav(!nav)
  }



  const { auth } = useSelector((state) => state);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={spkLogo} className="logo" alt="" />
        <ul className="links">
            <Link to="/"><li className="">Home</li></Link>
            <Link to="/communities"><li className="">Explore Communities</li></Link>
            <Link to="/community-create"><li className="">Create Community</li></Link>
            <Link to="/about"><li>About</li></Link>
            
        </ul>
        <div className="btn-search-wrap">
        <div className="search-wrap">
          <input className="input"
          placeholder="search" />
          <IoSearch />
        </div>
        {!auth.isAuthenticated ? (<button className="btn-login">Login</button>) : ""} 

        </div>

  

        <div className="toggle" onClick={handleNav}>
            {!nav ? <AiOutlineClose /> : <AiOutlineMenu  size={20} /> }
            
        </div>
        <div className={!nav ? "side-nav" : "side-nav-else"}>
        <img src={spkLogo} className="logo" alt="" />
            <ul className=" ">
            <Link className="lists" to="/" onClick={()=> setNav(!nav)}><span><TiHomeOutline size={20} /></span><li className="">Home</li></Link>
            <Link className="lists" to="/communities" onClick={()=> setNav(!nav)}><span><SiCompilerexplorer size={20} /></span><li className="">Explore </li></Link>
            <Link className="lists" to="/community-create" onClick={()=> setNav(!nav)}><span><CgCommunity size={20} /></span><li className="">Create Community</li></Link>
            <Link className="lists" to="/about" onClick={()=> setNav(!nav)}><span><FaAccessibleIcon size={20} /></span><li>About</li></Link>
            {!auth.isAuthenticated ? (<Link to="/login" onClick={()=> setNav(!nav)}><button className="btn-side">Login</button></Link>) : ""}
            <div className="social-icons">
            <BsDiscord size={20} /> <FaTelegramPlane size={20}  />
            </div>
            </ul>
        </div>

    </nav>





    // <div className="navbar">
    //   <div className="logo">
    //     <Link to="/">
    //       <img src={spkLogo} alt="SPK Logo" />
    //     </Link>
    //   </div>
    //   <div className="nav-links">
    //     <Link to="/communities">
    //       {isSmallScreen ? "Explore" : "Explore Communities"}
    //     </Link>
    //     <Link to="/community-create">
    //       {" "}
    //       {isSmallScreen ? "Create" : "Create Community"}
    //     </Link>
    //     <Link to="/docker-setup">Breakaway</Link>
    //     <Link to="/about">About</Link>

    //     {!auth.isAuthenticated ? (
    //       <Link to="/login">Login</Link>
    //     ) : (
    //       <button onClick={toggleSidebar} className="nav-links button">
    //         <FaBars />
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;
