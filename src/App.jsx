import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mappage from './pages/Mappage';
import DashboardPlant from './pages/DashboardPlant';
import DashboardStation from './pages/DashboardStation';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Mappage/>}/>
      <Route path="dashboard_tree" element={<DashboardPlant/>}/>
      <Route path="dashboard_station" element={<DashboardStation/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>   
      </Routes>
    </BrowserRouter>
  )
}

export default App
