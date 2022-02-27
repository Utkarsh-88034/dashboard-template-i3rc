import { register } from 'actions/userActions';
import { Select, Radio } from 'antd';
import Lok_Sabha from 'assets/data/up';
import DataConfirmationCard from 'components/Cards/DataConfirmationCard';
import React, { useCallback, useRef, useState } from 'react';
import './register.module.css';
import { State, City } from 'country-state-city';

import { useDispatch } from 'react-redux';
import MultiSelect from 'components/select/MultiSelect';
export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authTypeRef = useRef();
  const partyRef = useRef();
  const lknAccessRef = useRef();
  const dispatch = useDispatch();
  const [selectedState, setSelectedState] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedlks, setSelectedlks] = useState([]);
  const [selectedvds, setSelectedvds] = useState([]);

  const [selectedwrds, setSelectedwrds] = useState([]);

  const [accessType, setAccessType] = useState();
  const [renderModal, setRenderModal] = useState(false);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault(); // dhyan rakhein iska ..... Ispr aur bat krni h
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const authType = authTypeRef.current.value;
      const party = partyRef.current.value;
      let lok_sabha_access, vidhan_sabha_access, ward_no_access;

      if (accessType == 'lks') {
        lok_sabha_access = selectedlks;
      }
      if (accessType == 'vds') {
        vidhan_sabha_access = selectedvds;
      }
      if (accessType == 'wrd') {
        ward_no_access = selectedwrds;
      }

      const userCreate = {
        name,
        email,
        password,
        authType,
      };
      dispatch(register(name, email, password, authType));
      setRenderModal(true);
    },
    [dispatch]
  );
  const states = State.getStatesOfCountry('IN');

  const getSelectedStates = (value) => {
    setSelectedState(value);
    let tempArray = [];

    value.map((state) => {
      tempArray = tempArray.concat(City.getCitiesOfState('IN', state));
    });
    setSelectedCities(tempArray);
  };
  const getSelectedCities = (value) => {
    setSelectedCities(value);
  };
  const getSelectedLks = (value) => {
    setSelectedlks(value);
  };
  const getSelectedvds = (value) => {
    setSelectedvds(value);
    const config = {};
    selectedState.map((state) => {
      config['state'] = state;
    });
  };
  const getSelectedwrds = (value) => {
    setSelectedwrds(value);
  };
  return (
    <>
      {renderModal && (
        <DataConfirmationCard
          message={'User Created Successfully'}
          to={'/admin/dashboard'}
        />
      )}
      {
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6 text-center">
                  <h3 className="text-blueGray-500 text-lg font-bold">
                    Create User
                  </h3>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={submitHandler}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        required
                        ref={nameRef}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        required
                        ref={emailRef}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        required
                        ref={passwordRef}
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="authType"
                      >
                        Authorization Type
                      </label>
                      <select
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="authType"
                        id="authType"
                        ref={authTypeRef}
                      >
                        <option value="System Admin">System Admin</option>
                        <option value="Poll Admin Client">
                          Poll Admin Client
                        </option>
                        <option Value="BLO">Booth Level Officer</option>
                        <option value="Data Collector">Data Collector</option>
                      </select>
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="party"
                      >
                        Party
                      </label>
                      <select
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="party"
                        id="party"
                        ref={partyRef}
                      >
                        <option value="BJP">BJP</option>
                        <option value="INC">INC</option>
                        <option Value="BSP">BSP</option>
                        <option value="SP">SP</option>
                        <option value="TMC">TMC</option>
                        <option value="Other">OTHER</option>
                      </select>
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="access-type"
                      >
                        Access Type
                      </label>
                      <select
                        required
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="access-type"
                        id="access-type"
                        onChange={(e) => {
                          setAccessType(e.target.value);
                        }}
                      >
                        <option value="lks">Lok Sabha</option>
                        <option value="vds">Vidhan Sabha</option>
                        <option Value="wrd">Ward</option>
                      </select>
                    </div>
                    {accessType == 'vds' || accessType == 'wrd' ? (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          State
                        </label>
                        <MultiSelect
                          data={states}
                          value={'name'}
                          index={'isoCode'}
                          callback={getSelectedStates}
                        />
                      </div>
                    ) : (
                      ''
                    )}

                    {accessType == 'wrd' ? (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          Cities
                        </label>
                        <MultiSelect
                          data={selectedCities}
                          value={'name'}
                          index={'name'}
                          callback={getSelectedCities}
                        />
                      </div>
                    ) : (
                      ''
                    )}
                    {accessType == 'lks' && (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          Lok Sabha Access
                        </label>
                        <MultiSelect
                          data={Lok_Sabha}
                          value={'Lok Sabha Name'}
                          index={'Lok Sabha Number'}
                          callback={getSelectedLks}
                        />
                      </div>
                    )}

                    {accessType == 'vds' && (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          Vidhan Sabha Access
                        </label>
                        <MultiSelect
                          data={Lok_Sabha}
                          value={'Lok Sabha Name'}
                          index={'Lok Sabha Number'}
                          callback={getSelectedvds}
                        />
                      </div>
                    )}

                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Create Account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
