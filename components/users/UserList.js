import React from "react";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
import UserTable from "./UserTable";
import { fetchUsers } from "@/store/actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <UserHeader />
        <UserTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { fetchUsers };

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
