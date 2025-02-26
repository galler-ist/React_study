import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home </Link>
      <Link to={"/new"}>New </Link>
      <Link to={"/diary"}>Diary </Link>
      <Link to={"/edit"}>Edit </Link>
    </div>
  );
};

export default Header;
