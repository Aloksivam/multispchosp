// import React, { useState,useEffect } from "react";
// import GoogleButton from 'react-google-button'
// import { useGoogleLogin, googleLogout } from '@react-oauth/google';
// import { useNavigate } from "react-router-dom";
// const GoogleLoginButton = () => {
//   const navigate=useNavigate()
//   const loginWithGoogle = useGoogleLogin({
//     onSuccess: (tokens) => {
//       // console.log("Gtoken", tokens)
//       localStorage.setItem('accessToken', tokens.access_token);
//       localStorage.setItem('expires_in', tokens.expires_in);
//       localStorage.setItem('token_type', tokens.token_type);
//       navigate('/')
//     },
//     onError: () => {
//       console.log('Login Failed');
//     },
//   });

//   return (
//     <div className="m-5">
//       <GoogleButton onClick={() => loginWithGoogle()} />
//     </div>

//   );
// };

// export default GoogleLoginButton;
