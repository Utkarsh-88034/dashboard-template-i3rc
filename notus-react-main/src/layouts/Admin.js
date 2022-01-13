import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

// views

import Dashboard from 'views/admin/Dashboard.js';
import Maps from 'views/admin/Maps.js';
import Settings from 'views/admin/Settings.js';
import Tables from 'views/admin/Tables.js';
import { useSelector } from 'react-redux';

export default function Admin() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  console.log(userInfo);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact>
              {userInfo ? <Dashboard /> : <Redirect to="/auth/login" />}
            </Route>
            <Route path="/admin/maps" exact>
              {userInfo ? <Maps /> : <Redirect to="/auth/login" />}
            </Route>
            <Route path="/admin/settings" exact>
              {userInfo ? <Settings /> : <Redirect to="/auth/login" />}
            </Route>
            <Route path="/admin/tables" exact>
              {userInfo ? <Tables /> : <Redirect to="/auth/login" />}
            </Route>
            {/* <Redirect from="*" to="/admin/dashboard" /> */}
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
