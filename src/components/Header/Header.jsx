import Account from "../Account/Account";
import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Header.css";

const Header = (props) => {

  return (
    <div className="header" id="start">
      <Logo/>
      <Burger />
      <Menu/>
      <Account/>
    </div>
  );
}

export default Header;