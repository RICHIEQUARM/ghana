import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const newsData = [
  {
    title: "News Title 1",
    description: "Description for news 1",
    imageUrl: "/images/ChocoQueen.jpg",
  },
  {
    title: "News Title 2",
    description: "Description for news 2",
    imageUrl: "/images/Girlie.jpg",
  },
  {
    title: "News Title 3",
    description: "Description for news 3",
    imageUrl: "/images/Evening view.jpg",
  },
  // Add more news items as needed
];

const NewsCarousel = ({ newsData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-4/5 mx-auto mt-8">
      <Slider {...settings}>
        {newsData.map((news, index) => (
          <div key={index} className="relative p-4">
            <Image
              src={news.imageUrl}
              alt={news.title}
              layout="responsive"
              width={700}
              height={475}
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
              <h3 className="text-xl font-bold">{news.title}</h3>
              <p className="text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default NewsCarousel;
