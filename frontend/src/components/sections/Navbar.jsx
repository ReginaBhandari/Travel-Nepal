import React,{useState,useEffect} from 'react'
import logo from '../../assests/logo.jpeg';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';
import { Link,useHistory  } from "react-router-dom";
import {FaRegUserCircle} from 'react-icons/fa';
import { useDispatch , useSelector} from 'react-redux';
import { CLEAR_USER } from '../../actions/user';

export default function Navbar() {
    const [navbarState,setNavbarState]= useState(false);
    const { profile, isLoading } = useSelector((state) => state.user);

    const Token = localStorage.getItem("Token");
  
    const history = useHistory();

    const dispatch = useDispatch();

    function onLogout(e){
        dispatch({type: CLEAR_USER})
        localStorage.clear();
        history.push("/");
    }

    function fetchUser() {
      if (!profile) {
        history.replace("/login");
        console.log(profile);
      }
    }
    useEffect(() => {
      if (profile?.name) {
        fetchUser();
      }
    }, [profile]);
  

  return (
    <>
    <div className="nav">
        <div className="brand">
            <div className="container">
                <img src={logo} alt="logo" />
            </div>
            <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
            </div>
        </div>
        <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#recommend">Places</a></li>
        </ul>
        <div className='user'>
          {(Token)?<>
          <p>{profile?.name}</p>
          <button>
          <Link to={`/userprofile`}> <FaRegUserCircle/></Link>
          </button>
            <button onClick={onLogout} >Log Out</button>
          </>:
          <>
          <button><Link to={`/register`}>Register</Link></button>
          <button><Link to={`/login`}>Login</Link></button>
        </>
        }
        
       
        </div>
    </div>
    <div className={navbarState?"responsenav active":"responsenav"} >
    <ul>
            <li><a href="#hero" onClick={()=> setNavbarState(false)}>Home</a></li>
            <li><a href="#recommend" onClick={()=> setNavbarState(false)}>Places</a></li>

        </ul>
    </div>
    </>
  )
}