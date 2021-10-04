import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import AuthForm from '../components/modules/auth/auth-form';

function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  return <AuthForm />;
}

export default AuthPage;
