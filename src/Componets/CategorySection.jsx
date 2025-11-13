import React, { useEffect, useState } from "react";
import Animation from "../utility/Animation";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://community-cleanliness-server-alpha.vercel.app/category-collections"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Animation />;
  }
  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold text-accent text-center mb-8">
        Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center py-6 px-3 space-y-2 
            rounded-xl border-2 border-gray-100 
            transition transform duration-300 shadow-sm ease-in-out 
            hover:border-primary hover:scale-105 hover:shadow-md"
          >
            <img src={cat.image} alt={cat.title} className="w-20" />

            <h3 className="text-lg font-semibold text-accent">{cat.title}</h3>
            <p className="text-accent text-sm text-center">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
