import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

function Profile() {
  const router: NextRouter = useRouter()
   // cek if there token in local storage
   // if token not exist, redirect to login page
   useEffect(() => {
      if (!localStorage.getItem("kyupsr")) {
         router.push("/auth");
      }
   })
  return (
    <>
      <h1>Profile</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        doloremque, quos quod quaerat, quae quam cumque, voluptate
        reprehenderit dolorum, dolore nam quisquam.
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
 