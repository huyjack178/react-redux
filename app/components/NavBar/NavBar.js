import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Fa,
} from 'mdbreact';
import './style.scss';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <Navbar className="flexible-navbar" light expand="md" scrolling>
        <NavbarBrand href="/">
          <div>HAProxy</div>
        </NavbarBrand>
        <NavbarToggler onClick={this.onClick} />
        <Collapse isOpen={this.state.collapse} navbar>
          {/* <NavbarNav left>
            <NavItem active>
              <NavLink to="#">Home</NavLink>
            </NavItem>
          </NavbarNav> */}
          <NavbarNav right>
            {/* <NavItem>
              <a
                className="nav-link navbar-link"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/mdbootstrap"
              >
                <Fa icon="twitter" />
              </a>
            </NavItem> */}
            <NavItem>
              <a
                className="border border-light rounded mr-1 nav-link Ripple-parent"
                rel="noopener noreferrer"
                href="https://mdbootstrap.com/products/react-ui-kit/"
                target="_blank"
              >
                <Fa icon="github" className="mr-2" />
                Log In
              </a>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default TopNavigation;
