import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Logo, { LiRight } from './styled/Logo';
import { signOut } from '../actions';

const Header = props => (
  <nav className="navbar navbar-light">
    <ul className="nav navbar-nav">
      <Link to="/"><Logo className="nav-item">msergey.com </Logo></Link>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <LiRight className="nav-item">../source </LiRight>
      {props.authenticated
        ? null
        : <Link to="/signup">
          <LiRight className="nav-item">Sing Up</LiRight>
        </Link>}
      {props.authenticated
        ? <Link to="/" onClick={() => props.signOut()}>
          <LiRight className="nav-item">Sign Out</LiRight>
        </Link>
        : <Link to="/signin">
          <LiRight className="nav-item">Sing In</LiRight>
        </Link>}
      {props.authenticated
        ? <Link to="/post/new">
          <LiRight className="nav-item">New</LiRight>
        </Link>
        : null}
    </ul>
  </nav>
);

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, { signOut })(Header);
