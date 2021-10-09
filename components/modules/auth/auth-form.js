import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { login } from "../../../store/authSlice";
import { ButtonPending, ButtonSubmit } from "../../elements/button";
import { notifData, showNotification } from "../../../store/notifSlice";

async function signIn(email, password) {
  const response = await fetch("http://47.254.192.86:4000/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message || "Something went wrong!");
  }
  return data;
}

async function signUp(email, password) {
  const response = await fetch("http://47.254.192.86:4000/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message || "Something went wrong!");
  }
  return data;
}

function AuthForm() {
  const dispatch = useAppDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // optional: Add validation

    // determine if user wants to login or signup
    let signinOrSignup;
    isLogin
      ? (signinOrSignup = () => signIn(enteredEmail, enteredPassword))
      : (signinOrSignup = () => signUp(enteredEmail, enteredPassword));

    // send request to server
    // then dispatch action to store
    try {
      const responseData = await signinOrSignup();
      dispatch(login(responseData.user));
      await router.push("/");
    } catch (error) {
      dispatch(showNotification({ message: error.message, status: "Confirm", action: () => alert("gg")} ));
      setIsLoading(false);
    }
  }
  const {message, action, status}= useAppSelector(notifData)


  return (
    <div className="form-card max-w-md">
      <h1 className="text-3xl font-semibold text-center dark:text-white">
        {isLogin ? "Masuk" : "Daftar"} ke Jalur-Wisata
        {message, action, status}
      </h1>
      <form className="mt-6" onSubmit={submitHandler}>
        <div>
          <label htmlFor="email" className="block text-sm">
            Email
          </label>
          <input
            ref={emailInputRef}
            type="email"
            autoComplete="email"
            id="email"
            required
            className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm  dark:text-gray-200"
            >
              Password
            </label>
            <Link
              href="/lupa-password"
              className="text-xs text-indigo-600 dark:text-gray-400 hover:underline"
            >
              Lupa Password?
            </Link>
          </div>
          <input
            ref={passwordInputRef}
            type="password"
            autoComplete="current-password"
            id="password"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div className="mt-6">
          {isLoading ? (
            <ButtonPending />
          ) : (
            <ButtonSubmit text={isLogin ? "Masuk" : "Daftar"} />
          )}
        </div>
      </form>
      <p className="mt-8 text-sm font-light text-center text-gray-700">
        Belum Punya Akun?{" "}
        <button
          onClick={switchAuthModeHandler}
          className="font-medium text-pink-800 dark:text-gray-200 hover:underline"
        >
          {isLogin ? "DAFTAR" : "MASUK"}
        </button>
      </p>
    </div>
  );
}

export default AuthForm;
