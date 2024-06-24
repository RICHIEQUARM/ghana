import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className=" hover:text-gray-600 font-bold text-lg">
      <Icon className=" text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm ">{title}</p>
    </Link>
  );
}
