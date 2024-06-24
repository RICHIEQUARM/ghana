"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <div>
      <form
        className="flex  items-center px-0  font-bold text-lg justify-between  max-w-6xl mx-auto"
        onSubmit="handleSubmit"
      >
        <input
          type="text"
          value={search}
          className=" items-center px-3 w-22 h-10 rounded-md placeholder-gray-500 outline-none bg-red-200 flex-1"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
