import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableHead,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBRow,
  MDBCol
} from "mdbreact";

export default class UserPage extends React.PureComponent {
  render() {
    return (
      <div>
        <MDBRow className="mb-3">
          <MDBCol md="3">User Management</MDBCol>
          <MDBCol md="2" className="offset-md-7">
            <MDBBtn color="success" className="m-0 w-100">
              Add front-end
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <Table bordered hover small responsive>
              <TableHead color="primary-color" textWhite>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th width="30%">Action</th>
                </tr>
              </TableHead>
              <TableBody>
                {this.props.userList.toJS().map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{`${user.bindAddress}:${user.bindPort}`}</td>
                    <td className="text-center">
                      <MDBBtnGroup>
                        <MDBBtn color="info">
                          <MDBIcon icon="magic" className="mr-1" />
                        </MDBBtn>
                        <MDBBtn color="success">
                          <MDBIcon icon="magic" className="mr-1" />
                        </MDBBtn>
                        <MDBBtn color="danger">
                          <MDBIcon icon="magic" className="mr-1" />
                        </MDBBtn>
                      </MDBBtnGroup>
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

UserPage.propTypes = {
  userList: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
