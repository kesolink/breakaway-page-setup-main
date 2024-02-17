import React from 'react'
import "./profile-page.scss"
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { clearUser } from "../redux/userSlice";
import calculateUserReputation from "../helpers/reputation";

export default function Profilepage() {
  const [userProfile, setUserProfile] = useState({});
  const { userData } = useSelector((state) => state.user);
  console.log(userData)
  const dispatch = useDispatch();
  const logoutAndClear = () => (dispatch) => {
    dispatch(logout());
    dispatch(clearUser());
  };
  useEffect(() => {
    if (userData) {
      handleJsonMetaData();
    }
  }, [userData]);

  const handleJsonMetaData = () => {
    try {
      const jsn = JSON.parse(userData.posting_json_metadata);
      setUserProfile(jsn);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    
  };
  console.log(userProfile)
  return (
    <div>Profilepage
        <img src={`${userProfile.cover_image}`} alt="" />
        <img
          src={`https://images.hive.blog/u/${userData?.name}/avatar`}
          alt=""
        />
    </div>
  )
}
