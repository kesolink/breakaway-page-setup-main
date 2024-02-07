import React from 'react'
import "./nav-main.scss";
import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";



export default function Navmain() {
  return (
    <div className="navmain-wrap">
      <h3>Dashboard</h3>
      <div className="wrap-left">
        <div className="search-wrap">
          <input className="input"
          placeholder="search" />
          <IoSearch />
        </div>
        <div className="" >
         <img src="" alt="" />
         <h1>kesolink</h1>
        </div>
        <IoNotifications />
        <TbWorld />
        <BiLogOut />
      </div>
        

    </div>
  )
}
