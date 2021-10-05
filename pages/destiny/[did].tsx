import { NextPage, GetServerSideProps } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface Props {
  destiny?: {
    id: string;
    name: string;
    description: string;
    rating: string;
    image: string;
    category: string;
  };
}

// getServersideprops to get destiny data from server
export const getServersideprops: GetServerSideProps = async (context) => {
  console.log("dasd");

  const { did } = context.query;
  console.log(did);
  const res = await fetch(`http://localhost:4000/v1/destiny/${did}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res, "sadsa");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      destiny: data.destiny,
    },
  };
};

const Destiny = (props: Props) => {
  console.log(props.destiny, "sad");
  const router = useRouter();
  const { did } = router.query;

  //   if (!router.isFallback) {
  //    return <ErrorPage statusCode={404} />
  //  }

  useEffect(() => {
    fetch(`http://localhost:4000/v1/destiny/${did}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.destiny));
  });

  return <div>{did}</div>;
};

export default Destiny;
