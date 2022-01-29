import { register } from 'actions/userActions';
import DataConfirmationCard from 'components/Cards/DataConfirmationCard';
import React, { useCallback, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authTypeRef = useRef();
  const dispatch = useDispatch();

  const [renderModal, setRenderModal] = useState(false);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault(); // dhyan rakhein iska ..... Ispr aur bat krni h
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const authType = authTypeRef.current.value;
      dispatch(register(name, email, password, authType));
      setRenderModal(true);
    },
    [dispatch]
  );

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
