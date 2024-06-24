import Image from "next/image";

export default function Pad({ title, description, imageUrl }) {
  return (
    <div>
      <div className=" border-collapse overflow-hidden mb-3 p-2">
        <Image
          src={imageUrl}
          alt="The Images on the left side"
          width={300}
          height={150}
          className="object-cover border rounded-lg"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
