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
import Questionnaire from 'views/admin/Questionnaire';
import { useSelector } from 'react-redux';

export default function Admin() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;
  console.log(userInfo);
  return (
    <>
      <Sidebar />
      <div className="block md:ml-64 bg-blueGray-100">
        {/* Header */}
        <AdminNavbar />
        <div className="relative top-4 px-0 md:px-0 mx-0 w-full my-24">
          <Switch>
            <Route path="/admin/dashboard" exact>
              <HeaderStats />
              {userInfo ? <Dashboard /> : <Redirect to="/auth/login" />}
            </Route>
            <Route path="/admin/maps" exact>
              <HeaderStats />

              {userInfo ? <Maps /> : <Redirect to="/auth/login" />}
            </Route>
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
              {userInfo ? <Questionnaire /> : <Redirect to="/auth/login" />}
            </Route>
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
