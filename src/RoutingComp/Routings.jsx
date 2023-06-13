import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../Pages/Home';

import MarketPlace from '../Pages/MarketPlace';
import Noresult from '../Pages/Noresult';

import { Event } from '../Pages/Event';
import Eventtable from '../Admin/Eventtable';

export const Routings = () => {
  return (
    <>
    
    <Routes>
    <Route path="/"  element={<Home/>} />
<Route  path="/event"  element={<Event/>}  />
<Route path="/marketplace"  element={<MarketPlace/>} />
<Route path="/admin"  element={<Eventtable/>} />
<Route path="*"  element={<Noresult/>} />

    </Routes>
    </>
  )
}

