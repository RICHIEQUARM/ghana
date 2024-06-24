import Card from "./Card";

export default function CardItem() {
  const cardData = [
    {
      title: "Beach of Ghana",
      Description:
        "Beaches gives a sort of refreshment to the people of Ghana.",
      imageUrl: "/images/Beach.jpg",
      width: 300,
      height: 150,
    },

    {
      title: "Anchors",
      Description:
        "The people of Ghana have amazing festival which are celebrated every year",
      imageUrl: "/images/Anchors.jpg",
      width: 1000,
      height: 700,
    },

    {
      title: "CanopyWalks",
      Description:
        "The Canopywalk is a famous tourist Attraction which has brought people from all  over the world.",
      imageUrl: "/images/Canopy.jpg",
      width: 300,
      height: 150,
    },

    {
      title: "GreenOcean",
      Description:
        " The Ocean View, the tides and its turbulent nature gives nature what can only be imagined.",
      imageUrl: "/images/GreenOcean.jpg",
      width: 300,
      height: 150,
    },

    {
      title: "StreetGirl",
      Description:
        "The World has amazing story to tell,the girth, determination and struggle of the  people  gives them hope of suceess.",
      imageUrl: "/images/StreetGirl.jpg",
      width: 300,
      height: 150,
    },

    {
      title: "SeaBolts",
      Description:
        "The people of Ghana has an incredible history when it comes to the shores, people all over the world come to witness its incredible views at the shores.",
      imageUrl: "/images/SeaBolt.jpg",
      width: 300,
      height: 150,
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Our Featured Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.Description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
