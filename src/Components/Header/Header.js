import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';


const Header = () => {
    return (
        <nav>
    <div className="nav-wrapper indigo lighten-20">
      <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>Ágape</LinkWrapper>
      <ul className="right">
        <li><LinkWrapper to='/autores'>Arte</LinkWrapper></li>
        <li><LinkWrapper to='/livros'>Vestuário</LinkWrapper></li>
        <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
        <li><LinkWrapper to='/login'>Login</LinkWrapper></li>

      </ul>
    </div>
  </nav>
    );
}
export default Header;