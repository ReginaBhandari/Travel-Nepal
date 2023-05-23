import axios from "axios";
import React, { useState, useEffect } from "react";
import ALterDestination from "../sections/AlterDestination";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Home from "../sections/Home";
import Navbar from "../sections/Navbar";
import Recommended from "../sections/Recommended";
import Bookings from "../sections/Bookings";
import configuration from "../../config";
import { getProfile } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";

function LandingPage() {
  const { profile, isLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
    // console.log("Fetch User Called");
  }, []);

  return (
    <>
      <div>
        {profile?.isAdmin && <ALterDestination />}
        {profile?.isAdmin && <Bookings />}
        <Navbar />
        {/* <Home /> */}
        <Hero />
        <Recommended />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
