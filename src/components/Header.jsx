import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3  max-w-6xl mx-auto">
      <div className="flex gap-4 text-lg font-bold text-gray-400 ">
        <MenuItem title="Home" address="./" Icon={AiFillHome} />
        <MenuItem title="About" address="./About" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <SearchBox />
        <Link href={"/"} className="flex items-center gap-3 font-bold text-lg">
          <span className="text-2xl bg-amber-200 hover:text-amber-500 px-2 rounded-lg font-sans">
            GHANA
          </span>
          <span>AFRICA</span>
          <span>WEST AFRICA</span>
        </Link>
      </div>
    </div>
  );
}
