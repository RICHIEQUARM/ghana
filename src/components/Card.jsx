import Image from "next/image";

export default function Card({ title, description, imageUrl, width, height }) {
  return (
    <div>
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={width}
          height={height}
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
