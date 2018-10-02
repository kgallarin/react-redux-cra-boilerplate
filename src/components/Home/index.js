import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "actions";

class Home extends Component {
  state = {};
  render() {}
}

Home.propTypes = {
  inputAction: PropTypes.func.isRequired
};
export default connect(
  null,
  actions
)(Home);
