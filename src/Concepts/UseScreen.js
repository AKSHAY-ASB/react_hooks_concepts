import React, { useState } from 'react'
import { useEffect } from 'react';

export default function UseScreen(){

  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize",checkScreenSize);
    return () => {
      window.removeEventListener("resize",checkScreenSize)
    }
  }, []);
  

  const checkScreenSize = () =>{
    if(window.innerWidth > 992) return setScreenSize("Large");
    if(window.innerWidth < 992 && window.innerWidth > 600 ) 
    return setScreenSize("Medium");

    if(window.innerWidth < 600) return setScreenSize("Small")

  }
  return screenSize;
}


