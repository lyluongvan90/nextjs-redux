import React from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "@/store/actions/CounterAction";

class Counter extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterStore.value,
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
