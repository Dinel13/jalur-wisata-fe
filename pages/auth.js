import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AuthForm from "../components/modules/auth/auth-form";
import { selectCount } from "../store/counterSlice";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const count = useSelector(selectCount);

  //   useEffect(() => {
  //     getSession().then((session) => {
  //       if (session) {
  //         router.replace('/');
  //       } else {
  //         setIsLoading(false);
  //       }
  //     });
  //   }, [router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {count}
      <AuthForm />
    </>
  );
}

export default AuthPage;
