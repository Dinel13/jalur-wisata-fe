import { useState, useRef } from "react";
import { useRouter } from "next/router";

async function signIn(email, password) {
  const response = await fetch("http://localhost:4000/v1/login", {
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
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

async function signUp(email, password) {
  const response = await fetch("http://localhost:4000/v1/signup", {
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
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
}

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      try {
        const responseData = await signIn(enteredEmail, enteredPassword);
        localStorage.setItem("kyupsr", JSON.stringify(responseData.user.token));
        await router.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const responseData = await signUp(enteredEmail, enteredPassword);
        localStorage.setItem("kyupsr", JSON.stringify(responseData.user.token));
        await router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className="m-10 mx-auto w-11/12 max-w-md rounded bg-purple-900 shadow p-1 text-center">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="">
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className=""
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
