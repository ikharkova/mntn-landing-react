import "./Menu.css";

const Menu = (props) => {
  const menuItems = ['Equipment','About us','Blog'];

  return (
    <nav className="nav">
      {menuItems.map(e => <a className="nav-link text" href={e} target="blank">{e}</a>)}
    </nav>
  );
}

export default Menu;