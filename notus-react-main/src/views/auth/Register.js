import { register } from "actions/userActions";
import { Select, Radio } from "antd";
import Lok_Sabha from "assets/data/up";
import DataConfirmationCard from "components/Cards/DataConfirmationCard";
import React, { useCallback, useRef, useState } from "react";
import "./register.module.css";
import { State, City } from "country-state-city";

import { useDispatch } from "react-redux";
import MultiSelect from "components/select/MultiSelect";
import State_List from "assets/data/stateslist";
import wardData from "assets/data/ward";
import { removeFromArray } from "helpers/object";
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
  const [cities, setCities] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedlks, setSelectedlks] = useState([]);
  const [selectedvds, setSelectedvds] = useState([]);
  const [selectedwds, setSelectedwds] = useState([]);
  const [vidhanSabha, setVidhanSabha] = useState([]);
  const [selectedStateNames, setSelectedStateNames] = useState([]);
  const [wdAccess, setWdAccess] = useState([]);

  const [selectedwrds, setSelectedwrds] = useState([]);

  const [accessType, setAccessType] = useState("");
  const [renderModal, setRenderModal] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault(); // dhyan rakhein iska ..... Ispr aur bat krni h
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const authType = authTypeRef.current.value;
    const party = partyRef.current.value;
    let lok_sabha_access, vidhan_sabha_access, ward_no_access;

    if (accessType == "lks") {
      lok_sabha_access = selectedlks;
    }
    if (accessType == "vds") {
      const vdsArray = [];
      selectedStateNames.map((state) => {
        State_List.map((st) => {
          const config = {};

          if (st["State Name"] == state) {
            config["state"] = state;
            const vsdTemp = [];
            st["Vidhan Sabha List"].map((vd) => {
              if (selectedvds.includes(vd)) {
                vsdTemp.push(vd);
              }
            });
            config["vdns"] = vsdTemp;
            vdsArray.push(config);
          }
        });
      });
      vidhan_sabha_access = vdsArray;
    }

    if (accessType == "wrd") {
      const tempArray = wdAccess;
      tempArray.map((state) => {
        state["cities"].map((city) => {
          const tempArr = city["wdns"];
          console.log(tempArr);
          console.log(city["wdns"]);
          tempArr.map((wdn) => {
            if (!selectedwds.includes(`${city.city} ${wdn}`)) {
              console.log("first");
              city["wdns"] = removeFromArray(city["wdns"], wdn);
            }
          });
        });
      });
      setWdAccess(tempArray);
      // ward_no_access = selectedwrds;
    }
    console.log(wdAccess);

    const userCreate = {
      name,
      email,
      password,
      authType,
      party,
      lok_sabha_access,
      vidhan_sabha_access,
      ward_no_access,
    };
    console.log(userCreate);
    // dispatch(register(name, email, password, authType));
    // setRenderModal(true);
  };
  const states = State.getStatesOfCountry("IN");

  const getSelectedStates = (value, nameArray) => {
    setSelectedState(value);
    setSelectedStateNames(nameArray);
    let tempArray = [];

    value.map((state) => {
      tempArray = tempArray.concat(City.getCitiesOfState("IN", state));
    });
    setCities(tempArray);

    const temp2 = [];
    nameArray.map((stateName) => {
      State_List.map((state) => {
        if (state["State Name"] == stateName) {
          state["Vidhan Sabha List"].map((vds) => {
            const config = {};
            config["Vidhan Sabha Name"] = vds;
            temp2.push(config);
          });
        }
      });
    });

    setVidhanSabha(temp2);
  };
  const getSelectedCities = (value, nameArray) => {
    setSelectedCities(value);
    console.log(value);

    const tempArr = [];
    // setSelectedwds;
    const backendDataList = [];
    wardData.map((state) => {
      if (selectedStateNames.includes(state["state"])) {
        const cityListTemp = [];
        const backendDataConfig = {};
        backendDataConfig["state"] = state.state;

        state["cities"].map((city) => {
          if (value.includes(city["city"])) {
            const cityConfig = {};
            cityConfig["city"] = city.city;
            const wardListTemp = [];

            city["wards"].map((ward) => {
              wardListTemp.push(ward.wardName);

              const config = {};

              config["Ward No"] = ward.wardNo;
              config["Ward Name"] = city.city + " " + ward.wardName;
              tempArr.push(config);
            });
            cityConfig["wdns"] = wardListTemp;
            cityListTemp.push(cityConfig);
          }
        });
        backendDataConfig["cities"] = cityListTemp;
        backendDataList.push(backendDataConfig);
      }
    });
    setWdAccess(backendDataList);
    setWards(tempArr);
  };

  const getSelectedLks = (value, nameArray) => {
    setSelectedlks(value);
  };

  console.log(wdAccess);
  const getSelectedvds = (value, nameArray) => {
    setSelectedvds(value);
    console.log(value);
  };
  const getSelectedwrds = (value) => {
    setSelectedwrds(value);
    console.log(value);
  };

  return (
    <>
      {renderModal && (
        <DataConfirmationCard
          message={"User Created Successfully"}
          to={"/admin/dashboard"}
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
                    {accessType == "vds" || accessType == "wrd" ? (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          State
                        </label>
                        <MultiSelect
                          data={states}
                          attribute={"name"}
                          index={"isoCode"}
                          callback={getSelectedStates}
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    {accessType == "wrd" ? (
                      <>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="lkn"
                          >
                            Cities
                          </label>
                          <MultiSelect
                            data={cities}
                            attribute={"name"}
                            index={"name"}
                            callback={getSelectedCities}
                          />
                        </div>{" "}
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="lkn"
                          >
                            Wards
                          </label>
                          <MultiSelect
                            data={wards}
                            attribute={"Ward Name"}
                            index={"Ward Name"}
                            callback={getSelectedwrds}
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    {accessType == "lks" && (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          Lok Sabha Access
                        </label>
                        <MultiSelect
                          data={Lok_Sabha}
                          attribute={"Lok Sabha Name"}
                          index={"Lok Sabha Number"}
                          callback={getSelectedLks}
                        />
                      </div>
                    )}

                    {accessType == "vds" && (
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="lkn"
                        >
                          Vidhan Sabha Access
                        </label>
                        <MultiSelect
                          data={vidhanSabha}
                          attribute={"Vidhan Sabha Name"}
                          index={"Vidhan Sabha Name"}
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
