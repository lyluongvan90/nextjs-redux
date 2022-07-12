import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr index={index}>
                <th scope="row">1</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userStore.users,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
