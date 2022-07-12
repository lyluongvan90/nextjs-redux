import React from "react";
import { UserList } from "@/components/users";

export default class Users extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return <UserList />;
  }
}
