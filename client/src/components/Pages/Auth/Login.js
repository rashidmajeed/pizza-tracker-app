import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section class="login flex justify-center pt-24">
        <div class="w-full max-w-xs">
          <form
            action="/login"
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <span class="text-red-500 text-sm"></span>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                name="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                name="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="btn-primary rounded-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm"
                href="/register"
              >
                Don't have account?
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
