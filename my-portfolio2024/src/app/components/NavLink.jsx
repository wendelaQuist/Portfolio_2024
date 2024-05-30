import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#9B7DDE] sm:text-xl rounded md:p-0 hover:text-[#F4DAE2]"
    >
      {title}
    </Link>
  );
};

export default NavLink;