import React, {useEffect, useState} from 'react';
import routeData from './route.json'
import {useLocation } from "react-router-dom";

function Croute(){
    const locale=useLocation();
    const id= locale.state.id;
    const date=locale.state.date;
    
    return(
        <>
            {routeData.map((route) => 
            {
              return route.id === id && route.date === date ?
              <img src={route.route} alt="Route" />
              :
              null
            }
            )}

        </>
    )
}
export default Croute;