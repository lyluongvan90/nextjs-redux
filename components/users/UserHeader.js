import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h1>Manage users</h1>
          </Col>
        </Row>
        <Row>
          <Col className="float-right">
            <Button className="btn btn__primary btn__icon">
              <span>Add new</span>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
