import './Header.css';
import logo from '../../resources/mosaic_logo.png';

function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
          <h1>Mosaic Mind Psychotherapy
          <h3>LCSW PC</h3>
          </h1>
      </header>
    </div>
  );
}

export default Header;
