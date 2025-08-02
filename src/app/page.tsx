import React from "react";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="h-full w-full dark:bg-amber-900 p-6">
        <div className="section1 w-full flex">
        <ArticleCard
          image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
          date="15 APRIL 2024"
          category="Blog"
          title="Marketing Your Area Business Downturn Now A Days"
          />
          <ArticleCard
          image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
          date="15 APRIL 2024"
          category="Blog"
          title="Marketing Your Area Business Downturn Now A Days"
          />
          <ArticleCard
          image="https://images.pexels.com/photos/32922278/pexels-photo-32922278.jpeg"
          date="15 APRIL 2024"
          category="Blog"
          title="Marketing Your Area Business Downturn Now A Days"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
