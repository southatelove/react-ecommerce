function Header() {
  return (
    <nav className="purple lighten-3">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Southatelove Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/southatelove/react-ecommerce"
              target="blank"
            >
              github repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
