import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHead,
  MDBBtn,
  MDBBtnGroup,
  MDBIcon,
  MDBRow,
  MDBCol,
} from 'mdbreact';

export default class FrontEndPage extends React.PureComponent {
  render() {
    return (
      <div>
        <MDBRow className="mb-3">
          <MDBCol md="3">Front-end configuration</MDBCol>
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
                  <th>Bind Address</th>
                  <th width="30%">Action</th>
                </tr>
              </TableHead>
              <TableBody>
                {this.props.frontEndList.toJS().map((frontEnd, index) => (
                  <tr key={frontEnd.id}>
                    <td>{index + 1}</td>
                    <td>{frontEnd.name}</td>
                    <td>{`${frontEnd.bindAddress}:${frontEnd.bindPort}`}</td>
                    <td className="text-center">
                      <MDBBtnGroup small>
                        <MDBBtn color="info">Disable</MDBBtn>
                        <MDBBtn color="success">
                          <MDBIcon icon="magic" className="mr-1" /> Edit
                        </MDBBtn>
                        <MDBBtn color="danger">Delete</MDBBtn>
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

FrontEndPage.propTypes = {
  frontEndList: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
