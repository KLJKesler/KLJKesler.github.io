import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/test"}>test</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
