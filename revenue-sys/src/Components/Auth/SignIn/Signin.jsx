import React, { useState } from "react";
import "./SignIn.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import {Button, PrimaryButton} from "../../Admin/DashBoard/Content/Dashboard/Button/Button";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);

  // contol password

  const contolPassword = () => {
    setShowPassword((p) => !p);
  };



  return (
    <section className="bg-neutral-200 dark:bg-neutral-700 h-screen flex items-center justify-center">
      <div className="w-full flex items-center justify-center md:p-4 p-2">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            {/* <!-- Left column container--> */}
            <div className="px-4 md:px-0 lg:w-6/12">
              <div className="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                    We are The Lotus Team
                  </h4>
                </div>

                <form onSubmit={(e) => e.preventDefault()}>
                  <p className="mb-4">Please login to your account</p>
                  {/* <!--Username input--> */}
                  <input
                    type="text"
                    label="Username"
                    className="mb-4 ring-1 w-full px-2 rounded-sm p-1 outline-none"
                    placeholder="username"
                  ></input>

                  {/* <!--Password input--> */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      className="mb-4 ring-1 w-full rounded-sm px-2 p-1 outline-none"
                      placeholder="password"
                    ></input>
                    {showPassword && (
                      <FaEyeSlash
                        className="absolute top-2 right-4"
                        onClick={contolPassword}
                      />
                    )}
                    {!showPassword && (
                      <FaEye
                        className="absolute top-2 right-4"
                        onClick={contolPassword}
                      />
                    )}
                  </div>

                  {/* <!--Submit button--> */}
                  <div className="mb-12 pb-1 pt-1 text-center">
                    <Button handleNavigate={() => navigate('/admin-dashboard')}/>
                  </div>

                  <PrimaryButton to={'/'} title={"User"}/>
                </form>
              </div>
            </div>

            {/* <!-- Right column container with background and description--> */}
            <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none text-page">
              <div className="px-4 py-6 text-white md:mx-6 md:p-12 ">
                <h4 className="mb-6 text-xl font-semibold">
                  Elevate Your Revenue Management
                </h4>
                <p className="text-sm">
                  Our advanced revenue management system leverages cutting-edge
                  data analytics and machine learning to optimize your revenue
                  streams. By accurately forecasting demand and dynamically
                  adjusting pricing strategies, we ensure you stay ahead of the
                  competition and achieve sustainable growth. Join us in
                  transforming how you manage revenue and unlock new levels of
                  profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
