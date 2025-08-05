"use client";
import React, { useRef } from "react";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import ArticleCard2 from "../components/ArticleCard2";
import { useSlider } from "../utils/sliderUtils";

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { handleMouseDown } = useSlider(scrollRef);

  return (
    <>
      <Header />
      <main className="h-full w-full dark:bg-amber-900 p-6">
        {/* Sliding Article Cards */}
        <div
          className="section1 w-full flex overflow-x-auto pb-4 select-none scrollbar-hide"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          style={{
            WebkitOverflowScrolling: "touch",
            cursor: "grab",
          }}
        >
          <div className="w-1/3 min-w-[350px] flex-shrink-0">
            <ArticleCard
              image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
              date="15 APRIL 2024"
              category="Blog"
              title="Marketing Your Area Business Downturn Now A Days"
            />
          </div>
          <div className="w-1/3 min-w-[350px] flex-shrink-0">
            <ArticleCard
              image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
              date="15 APRIL 2024"
              category="Blog"
              title="Marketing Your Area Business Downturn Now A Days"
            />
          </div>
          <div className="w-1/3 min-w-[350px] flex-shrink-0">
            <ArticleCard
              image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
              date="15 APRIL 2024"
              category="Blog"
              title="Marketing Your Area Business Downturn Now A Days"
            />
          </div>
          <div className="w-1/3 min-w-[350px] flex-shrink-0">
            <ArticleCard
              image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
              date="15 APRIL 2024"
              category="Blog"
              title="Marketing Your Area Business Downturn Now A Days"
            />
          </div>
          <div className="w-1/3 min-w-[350px] flex-shrink-0">
            <ArticleCard
              image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
              date="15 APRIL 2024"
              category="Blog"
              title="Marketing Your Area Business Downturn Now A Days"
            />
          </div>
        </div>
        <div className="trending w-full mt-16">
          <div className="flex items-center mb-2">
            <span className="w-16 h-px bg-black mr-3"></span>
            <span className="text-pink-600 font-Barlow text-lg font-medium">
              Trending
            </span>
          </div>
          <h2 className="text-5xl font-Barlow font-normal text-black mt-2">
            Most Popular
          </h2>
          <div className="flex gap-10 mt-6">
            <div className="w-1/2 min-w-[350px]">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>{" "}
            <div className="w-1/2 min-w-[350px]">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>
          </div>
          <div className="flex gap-10 mt-6">
            <div className="w-1/3 min-w-[350px] ">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>{" "}
            <div className="w-1/3 min-w-[350px] ">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>
            <div className="w-1/3 min-w-[350px] ">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>
          </div>
        </div>
        <div className="lifestyle w-full mt-16">
          <div className="flex items-center mb-2">
            <span className="w-16 h-px bg-black mr-3"></span>
            <span className="text-pink-600 font-Barlow text-lg font-medium">
              Lifestyle
            </span>
          </div>
          <h2 className="text-5xl font-Barlow font-normal text-black mt-2">
            Interior Home Decoration
          </h2>

          <div className="flex gap-10 mt-6">
            <div className="w-1/4">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>{" "}
            <div className="w-1/4">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>
            <div className="w-1/4">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>
            <div className="w-1/4">
              <ArticleCard
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                category="Blog"
                title="Marketing Your Area Business Downturn Now A Days"
              />
            </div>
          </div>
        </div>
        <div className="travel w-full p-10 mt-16 h-496 border-1 border-gray-200">
          
          <div className="flex">
            <div className="w-3/5">
            <div className="flex items-center mb-2">  
            <span className="w-16 h-px bg-black mr-3"></span>
            <span className="text-pink-600 font-Barlow text-lg font-medium">
              Travel
            </span>
            </div>
          <h2 className="text-5xl font-Barlow font-normal text-black mt-2">
            Explore interesting journeys
          </h2>
          <ArticleCard2
            image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
            date="15 APRIL 2024"
            title="Exploring the Beauty of Nature"
            category="Travel"
            author="John Doe"
            description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
          />
          <ArticleCard2
            image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
            date="15 APRIL 2024"
            title="Exploring the Beauty of Nature"
            category="Travel"
            author="John Doe"
            description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
          />
          <ArticleCard2
            image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
            date="15 APRIL 2024"
            title="Exploring the Beauty of Nature"
            category="Travel"
            author="John Doe"
            description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
          />
          </div>
          <div className="w-2/5">
            <ArticleCard2
              image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
              date="15 APRIL 2024"
              title="Exploring the Beauty of Nature"
              category="Travel"
              author="John Doe"
              description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
            />
            <ArticleCard2
            image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
            date="15 APRIL 2024"
            title="Exploring the Beauty of Nature"
            category="Travel"
            author="John Doe"
            description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
          />
          <ArticleCard2
            image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
            date="15 APRIL 2024"
            title="Exploring the Beauty of Nature"
            category="Travel"
            author="John Doe"
            description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
          />
          </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
