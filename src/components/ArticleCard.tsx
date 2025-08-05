import React from "react";
import Image from "next/image";

type ArticleProps = {
  image: string;
  date: string;
  category: string;
  title: string;
};

const ArticleCard: React.FC<ArticleProps> = ({ image, date, category, title }) => (
  <article className="flex flex-col w-full max-w-3xl mx-auto">
    <div className="flex flex-col">
      {/* Maintain 1:1 aspect ratio and cover */}
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <div className="flex flex-col mt-8 px-2 items-start">
        <span className="uppercase text-xs tracking-widest text-neutral-500 mb-4 block font-Barlow">
          {category}
        </span>
        <h2 className="text-2xl font-Barlow font-semibold text-black dark:text-white leading-tight text-left">
          {title}
        </h2>
      </div>
    </div>
  </article>
);

export default ArticleCard;