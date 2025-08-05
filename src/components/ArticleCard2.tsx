import React from "react";

type ArticleCard2Props = {
  image: string;
  date: string;
  title: string;
  category: string;
  author: string;
  description: string;
};

const ArticleCard2: React.FC<ArticleCard2Props> = ({
  image,
  date,
  title,
  category,
  author,
  description,
}) => {
  return (
    <div className="flex flex-row items-start gap-2 py-5 font-montserrat h-36 overflow-hidden">
      {/* Date vertical */}
      <div className="text-left text-gray-400 text-[10px] w-fit writing-mode-vertical">
        {date}
      </div>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-[120px] h-[120px] object-cover"
      />
      {/* Content */}
      <div className="flex-1 h-[120px]">
        <div className="text-lg font-light mb-2 leading-tight">
          {title}
        </div>
        <div className="text-[10px] text-gray-400 font-light mb-1 tracking-wider">
          {category.toUpperCase()} &nbsp; BY <span className="text-[#E94F37] font-semibold">{author.toUpperCase()}</span>
        </div>
        <div className="text-sm text-gray-600 leading-relaxed overflow-hidden">
          {description}
        </div>
      </div>
      <style>
        {`
          .writing-mode-vertical {
            writing-mode: vertical-rl;
          }
        `}
      </style>
    </div>
  );
};

export default ArticleCard2;