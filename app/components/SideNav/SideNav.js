import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Fa, MDBCollapse } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './style.scss';

class TopNavigation extends Component {
  state = {
    collapseID: '',
  };

  toggleCollapse = (collapseID) => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  render() {
    return (
      <div className="sidebar-fixed position-fixed">
        <a href="#!" className="logo-wrapper waves-effect">
          <img
            alt="MDB React Logo"
            className="img-fluid"
            src="https://www.cncf.io/wp-content/uploads/2018/04/HAProxy-logo.png"
          />
        </a>
        <ListGroup className="list-group-flush">
          <NavLink exact to="/" activeClassName="activeClass">
            <ListGroupItem>
              <Fa icon="pie-chart" className="mr-3" />
              Dashboard
            </ListGroupItem>
          </NavLink>
          <NavLink to="/user" activeClassName="activeClass">
            <ListGroupItem>
              <Fa icon="user" className="mr-3" />
              User
            </ListGroupItem>
          </NavLink>
          <ListGroupItem
            onClick={() => this.toggleCollapse('configurationItems')}
          >
            <Fa icon="table" className="mr-3" />
            Configuration
            <Fa
              icon={
                this.state.collapseID === 'configurationItems'
                  ? 'angle-up'
                  : 'angle-down'
              }
              className="ml-4"
            />
          </ListGroupItem>
          <MDBCollapse id="configurationItems" isOpen={this.state.collapseID}>
            <NavLink to="/configuration/frontend" activeClassName="activeClass">
              <ListGroupItem>
                <Fa icon="table" className="mr-3" />
                Front-end
              </ListGroupItem>
            </NavLink>
            <NavLink to="/configuration/backend" activeClassName="activeClass">
              <ListGroupItem>
                <Fa icon="table" className="mr-3" />
                Back-end
              </ListGroupItem>
            </NavLink>
          </MDBCollapse>
        </ListGroup>
      </div>
    );
  }
}

export default TopNavigation;
