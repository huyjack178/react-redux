import React from 'react';
import PropTypes from 'prop-types';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Glyphicon } from 'react-bootstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './style.scss';

export class Header extends React.Component {
  render() {
    return (
      <SideNav
        onSelect={(selected) => {
          const to = `/${selected}`;
          this.props.history.push(to);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="dashboard">
          <NavItem eventKey="dashboard">
            <NavIcon>
              <Glyphicon glyph="star" />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>
          <NavItem eventKey="configuration">
            <NavIcon>
              <Glyphicon glyph="star" />
            </NavIcon>
            <NavText>Configuration</NavText>
            <NavItem eventKey="configuration/frontend">
              <NavText>Frontend</NavText>
            </NavItem>
            <NavItem eventKey="configuration/backend">
              <NavText>Backend</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object,
};

export default Header;
