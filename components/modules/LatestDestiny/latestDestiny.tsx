import { useEffect, useState } from "react";
import { destinyProps } from "../../../types/types";
import Loading from "../../layout/loading/Loading";
import Destiny from "../destiny/destiny";

const LatestDestiny = (): JSX.Element => {
  const [destiny, setDestiny] = useState<destinyProps[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:4000/v1/destinies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.destiny);
        setDestiny(data.destiny);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 body-font">
      <div className="container px-5  pt-10 sm:pt-14 lg:pt-16 pb-8 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-8 text-gray-900">
          Destiny Terbaru
        </h1>
        <div className="flex flex-wrap -m-4 pb-10">
          {isLoading && <Loading />}
          {destiny &&
            destiny.map((destiny: destinyProps) => (
              <Destiny
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
      <hr />
    </section>
  );
}

export default LatestDestiny;