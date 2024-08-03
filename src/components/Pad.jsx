import Image from "next/image";

export default function Pad({
  title,
  description,
  imageUrl,
  width,
  height,
  style,
}) {
  return (
    <div>
      <div className=" border-collapse overflow-hidden mb-3 p-1">
        <Image
          src={imageUrl}
          alt="The Images on the left side"
          width={width}
          height={height}
          style={style}
          className="object-cover border rounded-lg"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
