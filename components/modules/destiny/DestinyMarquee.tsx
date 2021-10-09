import Link from "next/link";
import Image from "next/image";
import { destinyProps } from "../../../types/types";

const DestinyMarquee = ({
  id,
  name,
  description,
  ratting,
  image,
  category,
}: destinyProps): JSX.Element => {
  return (
    <Link href={`/destiny/${id}`}>
      <a className="m-4 w-full bg-white rounded ">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={`http://47.254.192.86:4000/assets/${image}`}
          alt={name}
          width={0.2}
          height={0.13}
          layout="responsive"
        />
        <div className="p-2">
          <h1 className="title-font text-lg font-medium text-gray-800 mb-1">
            {name}
          </h1>
          <p className="leading-relaxed text-sm text-gray-700 mb-0.5">
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
      </a>
    </Link>
  );
};

export default DestinyMarquee;
