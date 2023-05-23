import axios from "axios";
import { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../actions/user";

const Home = () => {

  const { profile, isLoading } = useSelector((state) => state.user);

  return profile?.name ? (
    <h1 className="home-header">Hi! {profile?.name}</h1>
  ) : (
    <h1 className="home-header">You are not logged in</h1>
  );
};
export default Home;
