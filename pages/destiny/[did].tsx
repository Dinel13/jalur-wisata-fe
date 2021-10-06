import { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

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
  const [destiny, setDestiny] = useState(null);

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
      .then((data) => {
        console.log(data.destiny);
        setDestiny(data.destiny);
      });
  },[did]);

  return !destiny ? (
    <p>Loading...</p>
  ) : (
    <div className="max-w-screen-lg mx-auto my-8 px-8 lg:px-24 ">
      {destiny && (
        <>
          <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl  my-6 font-semibold">
            {destiny.name}
          </h1>
            <Image
              className="rounded-lg mx-auto lg:h-9/12  h-2/3"
              width={1}
              height={0.5}
              layout="responsive"
              src={`http://localhost:4000/assets/${destiny.image}`}
              alt={destiny.name}
            />
          <p>{destiny.description}</p>
          <p>{destiny.rating}</p>
          <p>{destiny.category}</p>
        </>
      )}
    </div>
  );
};

export default Destiny;
