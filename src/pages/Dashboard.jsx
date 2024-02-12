import React from 'react'
import "./dashboard.scss"
import { Routes, Route} from "react-router-dom";
import Sidenav from '../components/dashboard-files/Sidenav'
import Navmain from '../components/dashboard-files/Navmain'
import Communities from './Communities'
import Update from '../components/dashboard-files/Update'
import Setup from './Setup';
import PrivateRoute from '../private-routes/PrivateRoutes';

export default function Dashboard() {
  return (
    <div className="dashboard-wrap container***">
        <div className="side-nav-wrap"> <Sidenav /></div>
        <div className="main-container ">
            <div className="top-wrap">
              <Navmain />
            </div>
            <div className="main-box-wrap">
                <div className="big-container  app-container********" >
                  <Routes>
                  <Route path="/" element={ <Communities /> } />
                  <Route path="/overview" element={ <Communities /> } />
                  <Route path="/community-setups" element={<PrivateRoute><Setup /></PrivateRoute>} />
                  {/* <Route path="/community-setups" element={<Setup />} /> */}
                  </Routes>
                </div>
                <div className="update-wrap">
                  <Update />
                </div>
            </div>
        </div>
    </div>
  )
}
