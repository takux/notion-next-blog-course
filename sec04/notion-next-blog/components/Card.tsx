import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { CardProps } from "../types/types";

const Card: FC<CardProps> = ({ page }) => {
  return (
    <Link href={`/articles/${page.slug}`}>
      <a className="flex justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid">
          {/* image */}
          <div>
            {" "}
            <Image
              className="w-full static w-full h-auto"
              src={page.cover}
              alt=""
              objectFit="cover"
              width={400}
              height={225}
              quality={30}
            />
          </div>

          {/* title & date*/}
          <div className="px-6 pt-4 ">
            <h2 className="text-base font-medium mb-3 ">{page.name}</h2>
            <p className="text-gray-700 text-xs">{page.published}</p>
          </div>

          {/* tag */}
          <div className="px-6 pb-4 ">
            {page.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2"
              >
                {`#${tag}`}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
