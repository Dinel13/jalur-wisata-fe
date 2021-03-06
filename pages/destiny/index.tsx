import { FC, useEffect, useState } from "react";
import DestinyCard from "../../components/modules/destiny/DestinyCard";
import { destinyProps } from "../../types/types";

const AllDestiny = () => {
  const [destiny, setDestiny] = useState<destinyProps[]>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/v1/destinies`, {
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
  }, []);

  return !destiny ? (
    <p>Loading...</p>
  ) : (
    <section className="bg-white body-font">
      <div className="container px-5 pt-10 sm:pt-14 lg:pt-16 pb-8  mx-auto">
        <h1 className="text-center md:text-5xl lg:text-6xl text-4xl font-medium tracking-wider title-font mb-8 text-gray-800">
          Semua Tujuan
        </h1>

        <div className="flex flex-wrap -m-4">
          {destiny.map((destiny: destinyProps) => (
            <DestinyCard
              id={destiny.id}
              name={destiny.name}
              description={destiny.description}
              ratting={destiny.ratting}
              image={destiny.image}
              category={destiny.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllDestiny;
