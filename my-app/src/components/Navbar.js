import logo from "../logo.svg";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo"></img>
        <h3>My React-App</h3>
      </div>
      <div className="about">
        <h3>Click here-for more</h3>
      </div>
    </nav>
  );
}

export default Navbar;
