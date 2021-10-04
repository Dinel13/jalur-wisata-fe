import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AuthForm from "../components/modules/auth/auth-form";
import { selectCount } from "../store/counterSlice";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const count = useSelector(selectCount);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <AuthForm />
    </>
  );
}

export default AuthPage;
