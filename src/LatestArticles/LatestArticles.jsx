import React, { useState } from 'react';
import img1 from './image.png';
import img2 from './image 2.png';
import img3 from './image3.png';
import img4 from './image 4.png';
import img5 from './image 5.png';
import img6 from './image 6.png';
const LatestArticles = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage((prevPage) => (prevPage === 1 ? 2 : 1));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center">Latest Articles</h2>
      <div className="lg:flex justify-center space-x-4 mt-6">
        {page === 1 ? (
          <>
            <ArticleCard
              image={img1}
              title="Grilled Tomatoes at Home"
              description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            />
            <ArticleCard
              image={img2}
              title="Snacks for Travel"
              description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            />
            <ArticleCard
              image={img3}
              title="Post-workout Recipes"
              description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            />
          </>
        ) : (
          <>
            <ArticleCard
              image={img4}
              title="How To Grill Corn"
              description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            />
            <ArticleCard
              image={img5}
              title="Crunchwrap Supreme"
              description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            />
            <ArticleCard
              image={img6}
              title="Broccoli Cheese Soup"
              description="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            />
          </>
        )}
      </div>
      <div className="flex justify-center my-8 space-x-2">
        <button onClick={handleNext} className="text-gray-500 bg-slate-100 p-1 border-gray-200 border text-xl">
          &lt;
        </button>
        <span className='mt-2'>{page}/2</span>
        <button onClick={handleNext} className="text-gray-600 bg-slate-100 p-1 active:border-gray-400 border-gray-200 border text-xl">
          &gt;
        </button>
      </div>
    </div>
  );
};

const ArticleCard = ({ image, title, description }) => (
  <div className="max-w-xs rounded hover:scale-105 overflow-hidden shadow-lg p-4">
    <img className="w-full" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <button className="bg-blue-500 text-white rounded px-3 py-2">Read More</button>
    </div>
  </div>
);

export default LatestArticles;
