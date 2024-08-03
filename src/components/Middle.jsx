import Image from "next/image";

export default function Middle() {
  return (
    <div className=" static ">
      <div className="absolute  left-15 inset-y-11   right-10">
        <Image
          src="/images/Freedom.jpg"
          alt="The main image to be used"
          width={500}
          height={300}
        />

        <div className="p-4">
          <h1 className=" text-xl font-bold mb-3">Freedom and Justice</h1>
          <p className="text-gray-400">
            This symbolises the toil of our Forefathers to gain freedom and
            object against the act of slavery and colonization
          </p>
        </div>
      </div>
    </div>
  );
}
