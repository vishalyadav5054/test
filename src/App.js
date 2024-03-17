// import logo from './logo.svg';
// import './App.css';
// import LoginSignup from './components/LoginSignup/LoginSignup';

// function App() {
//   return (
//     <div>
//       <LoginSignup/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  // State variables for managing user input
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // Flag to toggle between login and signup forms

  // Function to handle form submission
  const handleSubmit = async () => {
    if (isLogin === true) {
      const url = "http://localhost:8000/api/v1/users/login";
      const body = {
        email,
        password,
      };
      const data = await fetch(url, {
        method: "POST",
        body:JSON.stringify(body),
      });
      const json = await data.json();
      if (json.success === true) {
        localStorage.setItem("token", json.data.accessToken);
      }
    } else if (isLogin === false) {
      const url = "http://localhost:8000/api/v1/users/register";
      const body = {
        username:Username,
        email,
        password,
      };
      const data = await fetch(url, {
        method: "POST",
        body:JSON.stringify(body),
      });
      const json = await data.json();
      if (json.success === true) {
        localStorage.setItem("token", json.data.accessToken);
      }
    }
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <div className="rounded-lg p-8 shadow-lg bg-gray-300 w-[350px]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {isLogin ? "Log in" : "Sign up"}
        </h2>
        {isLogin === false && (
          <div className="mb-4">
            <label
              htmlFor="Username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              id="Username"
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Username"
            />
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
            onClick={handleSubmit}
            type="submit"
          >
            {isLogin ? "Log in" : "Sign up"}
          </button>
        </div>
        <p
          className="text-center mt-4 text-gray-700 text-sm cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create an account" : "Already have an account? Log in"}
        </p>
      </div>
    </div>
  );
}

export default App;
