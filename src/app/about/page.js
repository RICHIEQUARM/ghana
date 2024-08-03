"use client";

import NewsCarousel from "@/components/NewsCarousel";

const page = () => {
  const newsData = [
    {
      title: "News 1",
      description: "The news paper of the century",
      imageUrl: "/images/Girlie.jpg",
    },

    {
      title: "News 2",
      description: "The news paper of the century",
      imageUrl: "/images/ChocoQueen.jpg",
    },

    {
      title: "News 3",
      description: "The news paper of the century",
      imageUrl: "/images/Evening view.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl text-bold mt-10 justify-between items-center ">
        Latest News
      </h1>
      <NewsCarousel newsData={newsData} />
    </div>
  );
};

export default page;
