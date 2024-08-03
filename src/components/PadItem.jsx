import Pad from "./Pad";

export default function PadItem() {
  const PadData = [
    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/Adowa.jpg",
      height: 150,
      width: 300,
      style: { padding: 0, margin: 0, width: 200 },
    },
    {
      title: "Freedom and Justice",
      description:
        "The symbolizes the toil of our fathers to gain independence for the nation Ghana",
      imageUrl: "/images/Freedom.jpg",
      height: 3450,
      width: 7000,
      style: {},
    },

    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/Girlie.jpg",
      height: 150,
      width: 300,
    },

    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/StreetGirl.jpg",
      height: 150,
      width: 300,
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-2  outline-none">
        <p className="text-2xl font-bold mb-6">Some Cultural practices</p>
        <div className=" items-center grid grid-cols-1 lg:grid-cols-2">
          {PadData.map((pad, index) => (
            <Pad
              key={index}
              title={pad.title}
              description={pad.description}
              imageUrl={pad.imageUrl}
              height={pad.height}
              width={pad.width}
              style={pad.style}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
