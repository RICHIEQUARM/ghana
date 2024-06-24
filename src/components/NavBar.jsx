import NavItem from "./NavItem";

export default function NavBar() {
  return (
    <div className="flex items-center  justify-center text-3xl gap-10 p-4  pt-5 mt-10 bg-gray-300 w-full">
      <NavItem title="History" address="./History" />
      <NavItem title="Achievement" address="./Achievement" />
      <NavItem title="Culture" address="./Culture" />
      <NavItem title="Cities" address="./Cities" />
    </div>
  );
}
