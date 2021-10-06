import Link from "next/link";
import Image from "next/image";
import { destinyProps } from "../../../types/types";

const Destiny = ({
  id,
  name,
  description,
  ratting,
  image,
  category,
}: destinyProps): JSX.Element => {
  return (
    <div className="p-3 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="h-full border-2 border-gray-300 border-opacity-60 shadow-lg rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={`http://localhost:4000/assets/${image}`}
          alt={name}
          width={0.2}
          height={0.13}
          layout="responsive"
        />
        <div className="px-3 pt-1.5 pb-4">
          <h1 className="title-font text-lg font-medium text-gray-800 mb-1">
            {name}
          </h1>
          <p className="leading-relaxed text-sm text-gray-700 mb-0.5">
            {/* <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
             */}
            {description}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link href={`/destiny/${id}`}>
              <a className="text-indigo-600 inline-flex items-center md:mb-2 lg:mb-0 hover:text-indigo-700 ">
                Selengkapnya
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destiny;
