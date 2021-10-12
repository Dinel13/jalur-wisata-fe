import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { useAppSelector } from "../hooks/hooks";
import { selectName } from "../store/authSlice";

function Profile() {
  const router: NextRouter = useRouter();
  const name = useAppSelector(selectName);

  useEffect(() => {
    console.log(name);
    if (!name) {
      router.push("/auth");
    }
  });
  return (
    <>
      <h1>hello {name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quos quod quaerat, quae quam cumque, voluptate reprehenderit
        dolorum, dolore nam quisquam.
      </p>
    </>
  );
}

// export async function getServerSideProps(context) {
//    const session = await getSession({ req: context.req });

//    if (!session) {
//      return {
//        redirect: {
//          destination: '/auth',
//          permanent: false,
//        },
//      };
//    }

//    return {
//      props: { session },
//    };
//  }

export default Profile;
