import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

// views

import Dashboard from 'views/admin/Dashboard.js';
import Settings from 'views/admin/Settings.js';
import Tables from 'views/admin/Tables.js';
import Questionnaire from 'views/admin/Questionnaire';
import { useSelector } from 'react-redux';
import VoterMapping from 'views/DashboardCharts/VoterMapping';
import Disposition from 'views/DashboardCharts/Disposition';
import BoothLevel from 'views/DashboardCharts/BoothLevel';
import ConnectToVoter from 'views/DashboardCharts/ConnectToVoter';

export default function Admin() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  return (
    <>
      <Sidebar />
      <div className="block md:ml-64 bg-blueGray-100">
        {/* Header */}
        <div style={{ position: 'fixed', top: 0, zIndex: 10000, width: '82%' }}>
          <AdminNavbar />
        </div>
        <div className="relative top-4 px-0 md:px-0 mx-0 w-full my-24">
          <Switch>
            <Route path="/admin/dashboard" exact>
              <HeaderStats />
              {userInfo && userInfo.authType != 'Data Collector' ? (
                <Dashboard />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
            <Route path="/admin/dashboard/voter-mapping" exact>
              <HeaderStats />
              {userInfo && userInfo.authType != 'Data Collector' ? (
                <VoterMapping />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
            <Route path="/admin/dashboard/disposition" exact>
              {/* <HeaderStats /> */}
              {userInfo && userInfo.authType != 'Data Collector' ? (
                <Disposition />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
            <Route path="/admin/dashboard/blw" exact>
              <HeaderStats />
              {userInfo && userInfo.authType != 'Data Collector' ? (
                <BoothLevel />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
            <Route path="/admin/dashboard/ctv" exact>
              <HeaderStats />
              {userInfo && userInfo.authType != 'Data Collector' ? (
                <ConnectToVoter />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
            <Route path="/admin/dashboard/solution" exact>
              <HeaderStats />
              {userInfo && userInfo.authType != 'Data Collector' ? (
                <Dashboard />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
            {/* <Route path="/admin/maps" exact>
              <HeaderStats />

              {userInfo ? <Maps /> : <Redirect to="/auth/login" />}
            </Route> */}
            <Route path="/admin/settings" exact>
              <HeaderStats />

              {userInfo ? <Settings /> : <Redirect to="/auth/login" />}
            </Route>
            <Route path="/admin/tables" exact>
              <HeaderStats />

              {userInfo ? <Tables /> : <Redirect to="/auth/login" />}
            </Route>
            {/* <Redirect from="*" to="/admin/dashboard" /> */}
            <Route path="/admin/ques" exact>
              {userInfo && userInfo.authType == 'Data Collector' ? (
                <Questionnaire />
              ) : (
                <Redirect to="/auth/login" />
              )}
            </Route>
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
