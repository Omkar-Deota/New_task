import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_api_base
const Conditions = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(6, "Name must be at least 6 characters long"),
  username: Yup.string()
    .required("Username is required")
    .min(6, "Username must be at least 6 characters long"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

const RegisterUser = () => {
  const [Name, setName] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Message, setMessage] = useState("");
  const [Errors, setErrors] = useState({name:"", username: "", password: "" });
  const Navigate= useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrors({ name:"" ,username: "", password: ""});

      await Conditions.validate(
        { name: Name, username: Username, password: Password },
        { abortEarly: false }
      );

      const response = await axios.post(
        `${API_URL}/register`,
        {
          name: Name,
          username: Username,
          password: Password,
        }
      );
      setMessage(`${response.data.message}`);
      setTimeout(()=>{
        Navigate("/login");
      },1000);
    } catch (error: any) {
      if (error.name === "ValidationError") {
        const validationErrors: any = {};
        error.inner.forEach((err: any) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setMessage("Oops! Something went wrong, please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center mt-20 sm:mt-5">
      <div className="mt-20 border-neutral-700 border-2 rounded-lg px-5 py-5">
        <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-widest">
          <span className="bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent">
            Sign Up
          </span>
        </h2>
        <div className="flex justify-center items-center">
          <form onSubmit={handleLogin} className="bg-transparent">
          <div className="ml-[3.25rem] mb-2">
              <label
                htmlFor="name"
                className="text-xl mx-auto px-3 py-3 text-orange-700 tracking-wider"
              >
                Name :
              </label>
              <input
                autoComplete="off"
                type="text"
                id="name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className={`bg-transparent hover:border-neutral-600 text-xl tracking-wider text-neutral-400
                `}
              />
              {Errors.username && (
                <p className="text-neutral-500 mt-2">{Errors.username}</p>
              )}
            </div>
            <div className="ml-[3.25rem]">
              <label
                htmlFor="username"
                className="text-xl mx-auto px-3 py-3 text-orange-700 tracking-wider"
              >
                Username :
              </label>
              <input
                autoComplete="off"
                type="text"
                id="username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className={`bg-transparent hover:border-neutral-600 text-xl tracking-wider text-neutral-400
                `}
              />
              {Errors.username && (
                <p className="text-neutral-500 mt-2">{Errors.username}</p>
              )}
            </div>
            <div className="ml-[3.25rem] mt-3">
              <label
                htmlFor="password"
                className="text-xl mx-auto px-3 py-3 text-orange-700 tracking-wider"
              >
                Password :
              </label>
              <input
                type="password"
                id="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-transparent hover:border-neutral-600 text-xl tracking-wider text-neutral-400
                
                `}
                autoComplete="off"
              />
              {Errors.password && (
                <p className="text-neutral-500 mt-2">{Errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex justify-center items-center px-2 py-1 mt-2 mx-auto sm:mt-3 text-2xl bg-gradient-to-r from-slate-900 to-slate-500 rounded-lg"
            >
              Dive-In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center text-neutral-700 lg:text-xl sm:text-sm">
          {Message && <p>{Message}</p>}
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
