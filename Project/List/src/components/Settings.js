import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "../modules/index";
import selectors from "../modules/selectors";

class Settings extends React.Component {
  handleChange = (e) => {
    this.props.actions.changeSettings(e.target.value);
  }

  render() {
    const {page} = this.props
    return (
      <table>
        <tbody>
          <tr>
            <td>Sort</td>
            <td>
              <select id="sortBy" value={this.props.sortBy} onChange={this.handleChange} >
                <option value="ID">ID</option>
                <option value="CREATED_AT">Created at</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Sort by: {this.props.sortBy}</td>
            <td>page: {page}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortBy: selectors.getSettings(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
