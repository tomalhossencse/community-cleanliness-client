import React from "react";

const categories = [
  {
    title: "Garbage",
    image:
      "https://i.ibb.co/7JL7jG4y/engin-akyurt-M2-W0-J6-Sqi-Sg-unsplash.jpg",
  },
  {
    title: "Illegal Construction",
    image:
      "https://bangladeshpost.net/webroot/uploads/featureimage/2025-11/690a250cb5070.jpg",
  },
  {
    title: "Broken Public Property",
    image:
      "https://www.livelaw.in/cms/wp-content/uploads/2016/02/Patidar-Agitation-in-Gujarat-min.jpg",
  },
  {
    title: "Road Damage",
    image:
      "https://images.unsplash.com/photo-1635068741358-ab1b9813623f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFtYWdlZCUyMHJvYWR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
  },
];

const CategorySection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Category Section
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                {cat.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
