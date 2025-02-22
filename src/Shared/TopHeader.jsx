import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import Login from './Login';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
export const TopHeader = () => {

  const navigate=useNavigate();
  const [islogedin, setIslogedIn] = useState(false)
  
    // session
    useEffect(() => {
      const t = localStorage.getItem(`accessToken`)
      if (t) {
        setIslogedIn(true)
      }
    }, [])

    // Logout 
    const logOut = () => {
      const g = googleLogout();
      // console.log("Logout called")
      localStorage.clear();
      setIslogedIn(false)
    };
    


  return (
    <>
      {/*top header start*/}
      <div className="top_header_wrapper d-none d-sn-none d-md-block d-lg-block">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="top_header_add">
                <ul className='p-2'>

  <li>
    <i className="fa fa-map-marker ml-5" aria-hidden="true"></i>
    <span> Address: </span>
    <a
      href="https://www.google.com/maps?q=BBSR,India"
      target="_blank"
      rel="noopener noreferrer"
    >
      BBSR, India
    </a>
  </li>
  <li>
    <i className="fa fa-phone" aria-hidden="true"></i>
    <span> Call us: </span>
    <a href="tel:+917766055537">+91 7766055537</a>
  </li>
  <li>
    <i className="fa fa-envelope" aria-hidden="true"></i>
    <a href="mailto:hello@abc.com">
      <span> Email: </span>hello@abc.com
    </a>
  </li>


                </ul>
              </div>
              <div className="top_login m-2 mr-2">
                <ul>
                  <li>
                    <i className="fa fa-address-book" aria-hidden="true" />
                    <a href="contact_us.html">Contact Us </a>
                  </li>
                </ul>
              </div>
              {/* <div className="top_login m-2">
                <ul>
                  <li className=''>
                  {
        islogedin ?<> <button className='m-0 outlinenone' onClick={() => logOut()}><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
        </>  :<>
        <i className="fa fa-sign-in" aria-hidden="true" />
        <Link to={'login'} >Log In / Sign Up </Link>
        </>
      }
                    
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
