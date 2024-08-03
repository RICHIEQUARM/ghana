import Link from "next/link";

export default function NavItem({ title, address }) {
  return (
    <div>
      <Link
        className="flex items-center gap-4 hover:text-white-200"
        href={address}
      >
        <p> {title} </p>
      </Link>
    </div>
  );
}
