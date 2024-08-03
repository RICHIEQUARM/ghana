import Image from "next/image";

export default function Card({ title, description, imageUrl }) {
  return (
    <div>
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
