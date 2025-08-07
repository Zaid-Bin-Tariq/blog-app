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
      <main className="h-full w-full dark:bg-amber-900 p-6 bg-[#fafafa]">
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
        <div className="travel w-full bg-white p-10 mt-16 h-fit border-1 border-gray-200">
          <div className="flex">
            <div className="w-3/5">
              <div className="flex items-center mb-2">
                <span className="w-16 h-px bg-black mr-3"></span>
                <span className="text-pink-600 font-Barlow text-lg font-medium">
                  Travel
                </span>
              </div>
              <h2 className="text-5xl font-Barlow font-normal text-black mt-2 mb-12">
                Explore interesting journeys
              </h2>
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[140px] h-[140px]"
              />
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[140px] h-[140px]"
              />
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[140px] h-[140px]"
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
                imageSize="w-[80px] h-[80px]"
              />
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[80px] h-[80px]"
              />
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[80px] h-[80px]"
              />
            </div>
          </div>
        </div>
        <div className="recent w-full mt-16 h-fit">
          <div className="flex">
            <div className="w-2/3">
              <div className="flex items-center mb-2">
                <span className="w-16 h-px bg-black mr-3"></span>
                <span className="text-pink-600 font-Barlow text-lg font-medium">
                  Recent
                </span>
              </div>
              <h2 className="text-5xl font-Barlow font-normal text-black mt-2 mb-12">
                Latest Stories
              </h2>
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[160px] h-[160px]"
              />
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[160px] h-[160px]"
              />
              <ArticleCard2
                image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                date="15 APRIL 2024"
                title="Exploring the Beauty of Nature"
                category="Travel"
                author="John Doe"
                description="Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet. Discover the breathtaking landscapes and hidden gems of our planet."
                imageSize="w-[160px] h-[160px]"
              />
            </div>
            <div className="w-1/3 pl-8">
              {/* Editor's Picked Heading */}
              <div className="mb-8">
                <h3 className="text-2xl font-Barlow font-semibold tracking-wide text-black mb-2">
                  EDITOR'S PICKED
                </h3>
                <div className="relative w-full h-[6px] mb-6">
                  <div className="absolute left-0 top-[2px] w-24 h-[4px] bg-black z-10" />
                  <div className="absolute left-0 top-1/2 w-full h-px bg-gray-200" />
                </div>
              </div>
              {/* Editor's Picked Cards */}
              <div className="flex flex-col">
                <ArticleCard2
                  image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                  date="15 APRIL 2024"
                  title="Marketing Your Area Business Downturn Now A Days"
                  category="Lifestyle"
                  author="Agnes"
                  imageSize="w-[80px] h-[80px]"
                />
                <ArticleCard2
                  image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                  date="15 APRIL 2024"
                  title="Marketing Your Area Business Downturn Now A Days"
                  category="Lifestyle"
                  author="Agnes"
                  imageSize="w-[80px] h-[80px]"
                 
                />
                <ArticleCard2
                  image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                  date="15 APRIL 2024"
                  title="Marketing Your Area Business Downturn Now A Days"
                  category="Lifestyle"
                  author="Agnes"
                  imageSize="w-[80px] h-[80px]"
                 
                />
                <ArticleCard2
                  image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
                  date="15 APRIL 2024"
                  title="Marketing Your Area Business Downturn Now A Days"
                  category="Lifestyle"
                  author="Agnes"
                  imageSize="w-[80px] h-[80px]"
                 
                />
              </div>
            </div>
          </div>
        </div>
        {/* Instagram Section */}
        <div className="w-full bg-white flex flex-col items-center justify-center py-16">
          <div className="flex items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="17" cy="7" r="1" fill="currentColor"/>
            </svg>
            <span className="text-pink-600 font-Barlow text-lg font-medium">athena</span>
          </div>
          <h2 className="text-4xl font-Barlow font-semibold text-black mb-2">Follow Me On Instagram</h2>
          <span className="text-gray-400 text-lg font-Barlow font-medium">Followed by: 256,215</span>
        </div>
      </main>
    </>
  );
};

export default Home;
