import Pad from "./Pad";

export default function PadItem() {
  const PadData = [
    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/Adowa.jpg",
    },
    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/BlackMan.jpg",
    },

    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/Girlie.jpg",
    },

    {
      title: "Culture Of The people",
      description:
        "The culture of the people is something that goes on from Generation to Generation and cannmot be forgotten",
      imageUrl: "/images/StreetGirl.jpg",
    },
  ];

  return (
    <div>
      <div className="max-w-96 outline-none p-4">
        <p className="text-2xl font-bold mb-6">Some Cultural practices</p>
        <div className="items-center grid grid-col-1">
          {PadData.map((pad, index) => (
            <Pad
              key={index}
              title={pad.title}
              description={pad.description}
              imageUrl={pad.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
