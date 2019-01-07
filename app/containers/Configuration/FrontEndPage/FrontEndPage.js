import React from 'react';
import { Table, TableBody, TableHead } from 'mdbreact';

export default class FrontEndPage extends React.PureComponent {
  render() {
    const { frontEndList } = this.props;

    return (
      <Table>
        <TableHead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Bind Address</th>
            <th>Action</th>
          </tr>
        </TableHead>
        <TableBody>
          {frontEndList.map((frontEnd, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{frontEnd.name}</td>
              <td>{`${frontEnd.address}:${frontEnd.port}`}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    );
  }
}
